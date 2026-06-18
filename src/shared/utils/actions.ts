import { revalidatePath } from "next/cache"
import { AppError } from "./error";
import { redirect } from "next/navigation";

export type ActionResponse = Promise<NonPromiseActionResponse>

export type NonPromiseActionResponse = {
    success: boolean,
    message: string
}

export function adminAction<T extends any[], R>(
    callback: (...args: T) => Promise<R>
) {
    return async (...args: T) => {
        try {
            const { requireAuth } = await import("@/lib/auth-server");
            const { session } = await requireAuth();

            if (!session) throw new AppError("No se ha iniciado sesión")

            const result = await callback(...args);
            revalidatePath('/')

            return {
                success: true,
                message: typeof result === 'string' ? result : "Operation successful.",
                data: result ? result : undefined
            };

        } catch (error) {
            if (error instanceof AppError) {
                return {
                    success: false,
                    message: error.message
                };
            }

            console.error('[SERVER_ACTION_ERROR]:', error);
            return {
                success: false,
                message: "Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde."
            };
        }
    };
}
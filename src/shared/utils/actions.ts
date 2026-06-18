import { revalidatePath } from "next/cache"
import { AppError } from "./error";

export type ActionResponse = Promise<NonPromiseActionResponse>

export type NonPromiseActionResponse = {
    success: boolean,
    message: string,
    data?: any
}

type ActionResult =
    | { message: string; data?: unknown }
    | string
    | void

export function adminAction<T extends any[], R>(
    callback: (...args: T) => Promise<ActionResult>
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
                message: typeof result === 'object' && result !== null && 'message' in result
                    ? result.message
                    : "Operación exitosa.",
                data: typeof result === 'object' && result !== null && 'data' in result
                    ? result.data
                    : result ?? undefined
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
                message: "Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.",
                data: undefined
            };
        }
    };
}
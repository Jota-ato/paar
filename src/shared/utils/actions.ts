import { revalidatePath } from "next/cache"
import { AppError } from "./error";

export type ActionResponse = Promise<NonPromiseActionResponse>

export type NonPromiseActionResponse<T = any> = {
    success: boolean;
    message: string;
    data?: T;
};

type InferActionData<R> = R extends string ? string : R;

type ActionResult =
    | { message: string; data?: unknown }
    | string
    | void

function getSuccessMessage(result: unknown, fallback = "Operation successful."): string {
    if (typeof result === "string") {
        return result;
    }

    if (result && typeof result === "object" && "message" in result && typeof result.message === "string") {
        return result.message;
    }

    return fallback;
}

export function authAction<T extends any[], R>(
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
                message: getSuccessMessage(result),
                data: result as InferActionData<R>
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
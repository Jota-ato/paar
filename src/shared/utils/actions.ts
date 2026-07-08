import { revalidatePath } from "next/cache";
import { AppError } from "./error";

export type ActionResponse<T = any> = Promise<NonPromiseActionResponse<T>>

export type NonPromiseActionResponse<T = any> = {
    success: boolean;
    message: string;
    data?: T;
};

type ActionResult<R = void> =
    | { message: string; data?: R }
    | string
    | void

function getSuccessMessage(result: unknown, fallback = "Operation successful."): string {
    if (typeof result === "string") return result;
    if (result && typeof result === "object" && "message" in result && typeof result.message === "string") {
        return result.message;
    }
    return fallback;
}

function getData<R>(result: unknown): R | undefined {
    if (result && typeof result === "object" && "data" in result) {
        return result.data as R;
    }
    return undefined;
}

export function authAction<T extends any[], R = void>(
    callback: (...args: T) => Promise<ActionResult<R>>
) {
    return async (...args: T): ActionResponse<R> => {
        try {
            const { requireAuth } = await import("@/lib/auth-server");
            const { session } = await requireAuth();
            if (!session) throw new AppError("No se ha iniciado sesión");

            const result = await callback(...args);
            revalidatePath('/');

            return {
                success: true,
                message: getSuccessMessage(result),
                data: getData<R>(result),
            };
        } catch (error) {
            if (error instanceof AppError) {
                return { success: false, message: error.message };
            }
            console.error('[SERVER_ACTION_ERROR]:', error);
            return {
                success: false,
                message: "Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.",
                data: undefined,
            };
        }
    };
}
import { toast } from "sonner";
import { NonPromiseActionResponse } from "./actions";

/**
 * Toast the user if the action had success or not
 * @param response the response of an action
 * @returns whether an accion had success or not
 */
export const showResponse = <T,>(response: NonPromiseActionResponse<T>): T | undefined => {
    if (response.success) {
        toast.success(response.message);
        return response.data;
    } else {
        toast.error(response.message);
        return undefined;
    }
};
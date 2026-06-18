"use server"

import { adminAction, NonPromiseActionResponse } from "@/shared/utils/actions"
import { userService } from "../services/user-service"
import { User } from "../types/user.types"

export const generateCoupleIdAction = adminAction(async (user: User) : Promise<Omit<NonPromiseActionResponse, 'success'>> => {
    const coupleId =  await userService.generateCoupleId(user.id)

    return {
        message: "Código generado correctamente",
        data: coupleId
    }
})

export const connectCoupleIdAction = adminAction(async (user: User, coupleId: string) => {
    await userService.connectCoupleId(user.id, coupleId)
    return {
        message: "Conexión realizada correctamente",
        data: undefined
    }
})
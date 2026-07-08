"use server"

import { authAction, NonPromiseActionResponse } from "@/shared/utils/actions"
import { userService } from "../services/user-service"
import { User } from "../types/user.types"
import { UserInput, userSchema } from "../schemas/user-schemas"
import { AppError } from "@/shared/utils/error"

export const generateCoupleIdAction = authAction(async (user: User) => {
    const coupleId =  await userService.generateCoupleId(user.id)

    return {
        message: "Código generado correctamente",
        data: coupleId
    }
})

export const connectCoupleIdAction = authAction(async (user: User, coupleId: string) => {
    await userService.connectCoupleId(user.id, coupleId)
    return {
        message: "Conexión realizada correctamente",
        data: undefined
    }
})

export const updateUserAction = authAction(async (user: User,input: UserInput) => {
    const zodResponse = userSchema.safeParse(input)

    if (zodResponse.error) throw new AppError('Datos inválidos')
    
    await userService.updateUser(user, zodResponse.data)

    return {
        message: "Datos actualizados correctamente",
    }
})

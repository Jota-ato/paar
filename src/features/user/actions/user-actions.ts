"use server"

import { adminAction } from "@/shared/utils/actions"
import { userService } from "../services/user-service"
import { User } from "../types/user.types"

export const generateCoupleIdAction = adminAction(async (user: User) => {
    return await userService.generateCoupleId(user.id)
}) 

export const connectCoupleIdAction = adminAction(async (user: User, coupleId: string) => {
    return await userService.connectCoupleId(user.id, coupleId)
})
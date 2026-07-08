"use server"

import { authAction } from "@/shared/utils/actions"
import { MemoryDraft } from "../stores/memories-store"
import { memoriesService } from "../services/memories-service"

export const createMemoryAction = authAction(async (data: MemoryDraft, userId: string) => {
    await memoriesService.createMemory(data, userId)

    return "Recuerdo creado exitosamente"
})
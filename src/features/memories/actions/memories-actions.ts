"use server"

import { authAction } from "@/shared/utils/actions"
import { MemoryDraft } from "../stores/memories-store"
import { memoriesService } from "../services/memories-service"

export const createMemoryAction = authAction(async (data: MemoryDraft, userId: string) => {
    await memoriesService.createMemory(data, userId)

    return "Recuerdo creado exitosamente"
})

export const updateMemoryAction = authAction(async (memoryId: string, data: MemoryDraft, userId: string) => {
    await memoriesService.editMemory(memoryId, data, userId)
    return "Recuerdo actualizado exitosamente"
})

export const deleteMemoryAction = authAction(async (memoryId: string, userId: string) => {
    await memoriesService.deleteMemory(memoryId, userId)

    return "Recuerdo eliminado exitosamente"
})
import { IMemoriesRepository, memoriesRepository } from "./memories-repository";
import { AppError } from "@/shared/utils/error";
import { MemoryDraft } from "../stores/memories-store";
import { couplesService } from "@/features/couples/services/couples-service";
import { Memory, NewMemory } from "@/db/schema";
import { User } from "@/features/user/types/user.types";
import { UpdateMemory } from "../types/memories.types";

class MemoriesService {
    constructor(
        private memoriesRepository: IMemoriesRepository,
    ) { }

    async createMemory(memory: MemoryDraft, userId: string) {
        const { user, coupleId } = await couplesService.validateUserCouple(userId)

        const payload: NewMemory = {
            coupleId,
            createdBy: user.id,
            title: memory.title,
            description: memory.description,
            image: memory.image,
            date: memory.date
        }

        await this.memoriesRepository.insert(payload)
    }

    async editMemory(memoryId: string, memory: MemoryDraft, userId: string) {
        const { user, coupleId } = await couplesService.validateUserCouple(userId)

        const existingMemory = await this.getMemoryById(memoryId)
        this.validateUserMemoryAccess(existingMemory, user)

        const payload: UpdateMemory = {
            ...memory,
            coupleId,
            createdBy: user.id,
        }

        await this.memoriesRepository.update(memoryId, payload)
    }

    async getCoupleMemories(userId: string) {
        const { coupleId } = await couplesService.validateUserCouple(userId)

        return await this.memoriesRepository.getAll(coupleId);
    }

    async getMemoryById(id: string) {
        const memory = await this.memoriesRepository.getById(id);
        if (!memory) throw new AppError("Recuerdo no encontrado")

        return memory;
    }

    validateUserMemoryAccess(memory: Memory, user: User) {
        if (memory.coupleId !== user.coupleId) {
            throw new AppError("No tienes permisos para ver este recuerdo")
        }
    }

    async deleteMemory(id: string, userId: string) {
        const { user, coupleId } = await couplesService.validateUserCouple(userId)

        const memory = await this.getMemoryById(id)
        this.validateUserMemoryAccess(memory, user)

        await this.memoriesRepository.delete(memory.id)
    }
}

export const memoriesService = new MemoriesService(
    memoriesRepository,
);
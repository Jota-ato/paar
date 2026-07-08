import { couplesRepository, ICouplesRepository } from "@/features/couples/services/couples-repository";
import { IMemoriesRepository, memoriesRepository } from "./memories-repository";
import { User, UserWithCouple } from "@/features/user/types/user.types";
import { AppError } from "@/shared/utils/error";
import { IUserRepository, userRepository } from "@/features/user/services/user-repository";
import { MemoryDraft } from "../stores/memories-store";
import { couplesService } from "@/features/couples/services/couples-service";
import { NewMemory } from "@/db/schema";

class MemoriesService {
    constructor(
        private memoriesRepository: IMemoriesRepository,
        private couplesRepository: ICouplesRepository,
        private userRepository: IUserRepository
    ) { }

    async createMemory(memory: MemoryDraft, userId: string) {
        const { user, coupleId } = await couplesService.validateUserCouple(userId)

        const payload: NewMemory = {
            coupleId,
            createdBy: user.id,
            title: memory.title,
            description: memory.description,
            image: memory.image,
            date: memory.date ? memory.date : new Date()
        }

        await this.memoriesRepository.insert(payload)
    }

    async getCoupleMemories(userId: string) {
        const { coupleId } = await couplesService.validateUserCouple(userId)

        return await this.memoriesRepository.getAll(coupleId);
    }

    async getMemoryById(id: string, userId: string) {

        const { coupleId } = await couplesService.validateUserCouple(userId)
        const memory = await this.memoriesRepository.getById(id);

        if (!memory) {
            throw new AppError("Recuerdo no encontrado")
        }

        if (memory.coupleId !== coupleId) {
            throw new AppError("No tienes permisos para ver este recuerdo")
        }

        return memory;
    }

    async deleteMemory(id: string, userId: string) {
        const { user, coupleId } = await couplesService.validateUserCouple(userId)

        const memory = await this.getMemoryById(id, user.id)

        await this.memoriesRepository.delete(memory.id)
    }
}

export const memoriesService = new MemoriesService(
    memoriesRepository,
    couplesRepository,
    userRepository
);
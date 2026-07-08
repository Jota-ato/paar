import { couplesRepository, ICouplesRepository } from "@/features/couples/services/couples-repository";
import { IMemoriesRepository, memoriesRepository } from "./memories-repository";
import { User } from "@/features/user/types/user.types";
import { AppError } from "@/shared/utils/error";
import { IUserRepository, userRepository } from "@/features/user/services/user-repository";
import { MemoryDraft } from "../stores/memories-store";

class MemoriesService {
    constructor(
        private memoriesRepository: IMemoriesRepository,
        private couplesRepository: ICouplesRepository,
        private userRepository: IUserRepository
    ) { }

    async createMemory(memory: MemoryDraft, userId: string) {
        const user = await this.userRepository.getById(userId)

        if (!user) throw new AppError("Usuario no encontrado")
        if (!user.coupleId) throw new AppError("Una pareja no está vinculada a este usuario")

        const couple = await this.couplesRepository.getById(user.coupleId)
        if (!couple) throw new AppError("Pareja no encontrada")

        await this.memoriesRepository.insert({
            ...memory,
            coupleId: couple.id,
            createdBy: user.id,
            date: memory.date ? memory.date : new Date()
        })
    }

    async getCoupleMemories(coupleId: string, user: User) {

        const couple = await this.couplesRepository.getById(coupleId);
        const userFromDb = await this.userRepository.getById(user.id);

        if (!userFromDb) {
            throw new AppError("Usuario no encontrado")
        }

        if (!couple) {
            throw new AppError("No encontramos la pareja")
        }

        if (userFromDb.coupleId !== couple.id) {
            throw new AppError("No tienes permisos para ver los recuerdos de esta pareja")
        }

        return await this.memoriesRepository.getAll(userFromDb.coupleId);
    }
}

export const memoriesService = new MemoriesService(
    memoriesRepository,
    couplesRepository,
    userRepository
);
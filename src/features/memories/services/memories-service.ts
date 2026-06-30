import { couplesRepository, ICouplesRepository } from "@/features/couples/services/couples-repository";
import { IMemoriesRepository, memoriesRepository } from "./memories-repository";
import { User } from "@/features/user/types/user.types";
import { AppError } from "@/shared/utils/error";

class MemoriesService {
    constructor(
        private memoriesRepository: IMemoriesRepository,
        private couplesRepository: ICouplesRepository
    ) {}
    
    async getCoupleMemories(coupleId: string, user: User) {

        const couple = await this.couplesRepository.getById(coupleId);

        if (!couple) {
            throw new AppError("No encontramos la pareja")
        }

        if (user.coupleId !== couple.id) {
            throw new AppError("No tienes permisos para ver los recuerdos de esta pareja")
        }

        return await this.memoriesRepository.getAllMemories(user.coupleId);
    }
}

export const memoriesService = new MemoriesService(
    memoriesRepository,
    couplesRepository
);
import { Couple } from "@/db/schema";
import { couplesRepository, ICouplesRepository } from "./couples-repository";
import { AppError } from "@/shared/utils/error";

class CouplesService {
    constructor(
        private couplesRepository: ICouplesRepository
    ) {}

    async getCoupleById(id: string): Promise<Couple | null> {
        return await this.couplesRepository.getById(id)
    }

    async syncCouples(coupleId: string): Promise<void> {

        const couple = await this.couplesRepository.getById(coupleId)
        if (couple) {
            throw new AppError("Ya existe este par de parejas")
        }

        await this.couplesRepository.createCouple(coupleId)
    }
}

export const couplesService = new CouplesService(couplesRepository)  
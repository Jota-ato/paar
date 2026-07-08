import { Couple } from "@/db/schema";
import { couplesRepository, ICouplesRepository } from "./couples-repository";
import { AppError } from "@/shared/utils/error";
import { User, UserWithCouple } from "@/features/user/types/user.types";
import { IUserRepository, userRepository } from "@/features/user/services/user-repository";

class CouplesService {
    constructor(
        private couplesRepository: ICouplesRepository,
        private userRepository: IUserRepository
    ) { }

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

    async validateUserCouple(userId: string): Promise<
        { user: UserWithCouple, coupleId: string }
    > {
        const user = await this.userRepository.getById(userId);

        if (!user) {
            throw new AppError("Usuario no encontrado")
        }

        if (!this.hasCoupleId(user)) {
            throw new AppError("No estás vinculado a ninguna pareja")
        }

        const couple = await this.couplesRepository.getById(user.coupleId);
        if (!couple) {
            throw new AppError("No encontramos la pareja")
        }

        if (user.coupleId !== couple.id) {
            throw new AppError("No tienes permisos para ver los recuerdos de esta pareja")
        }

        return { user, coupleId: couple.id }
    }

    hasCoupleId(user: User): user is UserWithCouple {
        return user.coupleId != null;
    }
}

export const couplesService = new CouplesService(
    couplesRepository,
    userRepository
);
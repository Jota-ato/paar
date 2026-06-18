import { AppError } from "@/shared/utils/error";
import { User } from "../types/user.types";
import { IUserRepository, userRepository } from "./user-repository";

class UserService {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async getUserById(id: string): Promise<User | null> {
        return await this.userRepository.getById(id)
    }

    async generateCoupleId(userId: string): Promise<string> {
        const user = await this.userRepository.getById(userId)
        if (!user) {
            throw new AppError("Usuario no encontrado")
        }
        return await this.userRepository.generateCoupleId(user.id)
    }

    async connectCoupleId(userId: string, coupleId: string): Promise<void> {
        const user = await this.userRepository.getById(userId)
        if (!user) {
            throw new AppError("Usuario no encontrado")
        }
        await this.userRepository.conectCoupleId(user.id, coupleId)
    }
}

export const userService = new UserService(userRepository)
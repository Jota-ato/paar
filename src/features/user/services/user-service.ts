import { AppError } from "@/shared/utils/error";
import { User } from "../types/user.types";
import { IUserRepository, userRepository } from "./user-repository";
import { couplesService } from "@/features/couples/services/couples-service";
import { UserInput } from "../schemas/user-schemas";

class UserService {
    constructor(
        private userRepository: IUserRepository
    ) { }

    async getUserById(id: string): Promise<User | null> {
        return await this.userRepository.getById(id)
    }

    async getUserByCoupleId(coupleId: string, exludeId: string): Promise<User | null> {
        return await this.userRepository.getByCoupleId(coupleId, exludeId)
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

        if (user.isLinked) {
            throw new AppError("Ya estás conectado")
        }

        await couplesService.syncCouples(coupleId)

        await this.userRepository.conectCoupleId(user.id, coupleId)
    }

    async updateUser(user: User, input: UserInput) {
        const dataBaseUser = await this.userRepository.getById(user.id)
        if (!dataBaseUser) {
            throw new AppError("Usuario no encontrado")
        }

        if (dataBaseUser.id !== user.id) {
            throw new AppError("No tienes permisos para editar este usuario")
        }

        await this.userRepository.updateUser(dataBaseUser.id, input)
    }
}

export const userService = new UserService(userRepository)
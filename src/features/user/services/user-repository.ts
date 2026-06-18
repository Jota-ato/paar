import { db } from "@/db"
import { user } from "@/db/schema"
import { eq } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import { User } from "../types/user.types";

export interface IUserRepository {
    getById(id: string): Promise<User | null>
    getByCoupleId(coupleId: string, exlucedId: string): Promise<User | null>
    generateCoupleId(userId: string): Promise<string>
    conectCoupleId(userId: string, coupleId: string): Promise<void>
}

class UserRepository implements IUserRepository {

    async getById(id: string): Promise<User | null> {
        return await db
            .query
            .user
            .findFirst({
                where: (user, { eq }) => eq(user.id, id)
            }) ?? null
    }

    async getByCoupleId(coupleId: string, exludeId: string): Promise<User | null> {
        return await db
            .query
            .user
            .findFirst({
                where: (user, { eq, and, not }) => and(
                    eq(user.coupleId, coupleId),
                    not(eq(user.id, exludeId))
                )
            }) ?? null
    }

    async generateCoupleId(userId: string): Promise<string> {
        const coupleId = uuid()
        await db
            .update(user)
            .set({
                coupleId
            })
            .where(eq(user.id, userId))
        return coupleId
    }

    async conectCoupleId(userId: string, coupleId: string): Promise<void> {
        await db
            .update(user)
            .set({
                isLinked: true
            })
            .where(eq(user.coupleId, coupleId))
        await db
            .update(user)
            .set({
                coupleId,
                isLinked: true
            })
            .where(eq(user.id, userId))
    }
}

export const userRepository = new UserRepository()
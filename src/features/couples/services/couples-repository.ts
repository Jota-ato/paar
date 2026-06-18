import { db } from "@/db"
import { Couple, couples } from "@/db/schema"

export interface ICouplesRepository {
    createCouple(coupleId: string): Promise<void>
    getById(id: string): Promise<Couple | null>
}

class CouplesRepository implements ICouplesRepository {
    async createCouple(coupleId: string): Promise<void> {
        await db
            .insert(couples)
            .values({
                id: coupleId
            })
    }

    async getById(id: string): Promise<Couple | null> {
        return await db
            .query
            .couples
            .findFirst({
                where: (couples, { eq }) => eq(couples.id, id)
            }) ?? null
    }
}

export const couplesRepository = new CouplesRepository()
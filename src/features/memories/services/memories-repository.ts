import { db } from "@/db";
import { memories, Memory, NewMemory } from "@/db/schema";

export interface IMemoriesRepository {
    insert(memory: NewMemory): Promise<void>;
    getAll(coupleId: string): Promise<Memory[]>;
}

class MemoriesRepository implements IMemoriesRepository {
    async insert(memory: NewMemory): Promise<void> {
        await db
            .insert(memories)
            .values(memory)
            .returning()
    }

    async getAll(coupleId: string): Promise<Memory[]> {
        return await db
            .query
            .memories
            .findMany({
                where: (memories, { eq }) => eq(memories.coupleId, coupleId)
            })
    }
}

export const memoriesRepository = new MemoriesRepository();
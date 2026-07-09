import { db } from "@/db";
import { memories, Memory, NewMemory } from "@/db/schema";
import { eq } from "drizzle-orm";
import { MemoryWithUser, UpdateMemory } from "../types/memories.types";

export interface IMemoriesRepository {
    insert(memory: NewMemory): Promise<void>;
    update(memoryId: string, memory: UpdateMemory): Promise<void>;
    delete(memoryId: string): Promise<void>;
    getAll(coupleId: string): Promise<MemoryWithUser[]>;
    getById(id: string): Promise<Memory | null>;
}

class MemoriesRepository implements IMemoriesRepository {
    async insert(memory: NewMemory): Promise<void> {
        await db
            .insert(memories)
            .values(memory)
            .returning()
    }

    async update(memoryId: string, memory: UpdateMemory): Promise<void> {
        await db
            .update(memories)
            .set(memory)
            .where(eq(memories.id, memoryId))
    }

    async delete(memoryId: string): Promise<void> {
        await db
            .delete(memories)
            .where(eq(memories.id, memoryId))
    }

    async getAll(coupleId: string): Promise<MemoryWithUser[]> {
        return await db
            .query
            .memories
            .findMany({
                where: (memories, { eq }) => eq(memories.coupleId, coupleId),
                with: {
                    user: true
                }
            })
    }

    async getById(id: string): Promise<Memory | null> {
        return await db
            .query
            .memories
            .findFirst({
                where: (memories, { eq }) => eq(memories.id, id)
            }) || null
    }
}

export const memoriesRepository = new MemoriesRepository();
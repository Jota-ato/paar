import { db } from "@/db";
import { Memory } from "@/db/schema";

export interface IMemoriesRepository {
    getAllMemories(coupleId: string): Promise<Memory[]>;
}

class MemoriesRepository implements IMemoriesRepository {
    async getAllMemories(coupleId: string) {
        return await db
            .query
            .memories
            .findMany({
                where: (memories, { eq }) => eq(memories.coupleId, coupleId)
            })
    }
}

export const memoriesRepository = new MemoriesRepository();
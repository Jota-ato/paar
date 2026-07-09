import { Memory } from "@/db/schema";
import { User } from "@/features/user/types/user.types";

export type UpdateMemory = Partial<Omit<Memory, "id">>
export type MemoryWithUser = Memory & {
    user: User
}
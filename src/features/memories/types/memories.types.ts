import { Memory } from "@/db/schema";

export type UpdateMemory = Partial<Omit<Memory, "id">>
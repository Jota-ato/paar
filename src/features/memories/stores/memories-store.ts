import { Memory } from "@/db/schema";
import { create } from "zustand";

export interface MemoryDraft {
    title: string;
    date: Date;
    description: string;
    image: string;
    id?: string | null;
}

export interface MemoryStore {
    memory: MemoryDraft | Memory;
    setMemory: (memory: MemoryDraft) => void;
}

export const initialMemory: MemoryDraft = {
    title: "",
    date: new Date(),
    description: "",
    image: "",
};

export const useMemoryStore = create<MemoryStore>((set) => ({
    memory: initialMemory,
    setMemory: (memory) => set({ memory }),
}));
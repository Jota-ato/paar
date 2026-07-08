import { Memory } from "@/db/schema";
import { create } from "zustand";

export interface MemoryStore {
    currentMemory: Memory | null;
    setCurrentMemory: (memory: Memory | null) => void;

    memoryTitle: string | null;
    setMemoryTitle: (title: string | null) => void;

    memoryDate: Date | null | undefined;
    setMemoryDate: (date: Date | null | undefined) => void;

    memoryDescription: string | null;
    setMemoryDescription: (description: string | null) => void;

    memoryImageUrl: string | null;
    setMemoryImageUrl: (url: string | null) => void;
}

export const useMemoryStore = create<MemoryStore>((set) => ({
    currentMemory: null,
    setCurrentMemory: (memory) => set({ currentMemory: memory }),

    memoryTitle: null,
    setMemoryTitle: (title) => set({ memoryTitle: title }),

    memoryDate: null,
    setMemoryDate: (date) => set({ memoryDate: date }),

    memoryDescription: null,
    setMemoryDescription: (description) => set({ memoryDescription: description }),

    memoryImageUrl: null,
    setMemoryImageUrl: (url) => set({ memoryImageUrl: url }),
}));
import { create } from "zustand";

export interface MemoryDraft {
    title: string;
    date: Date | null;
    description: string;
    image: string;
    id?: string | null;
}

export interface MemoryStore {
    memory: MemoryDraft;
    setMemory: (memory: MemoryDraft) => void;
}

export const initialMemory: MemoryDraft = {
    title: "",
    date: null,
    description: "",
    image: "",
};

export const useMemoryStore = create<MemoryStore>((set) => ({
    memory: initialMemory,
    setMemory: (memory) => set({ memory }),
}));
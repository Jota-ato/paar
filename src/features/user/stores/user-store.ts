import { create } from "zustand";
import { User } from "../types/user.types";

export interface UserStore {
    isOpen: boolean
    user?: User | null
    toggleOpen: () => void
    setUser: (user?: User | null) => void
}

export const useUserStore = create<UserStore>()((set) => ({
    isOpen: false,
    user: {} as User,
    toggleOpen: () => set((state) => ({
        isOpen: !state.isOpen,
    })),
    setUser: (user?: User | null) => set((state) => ({
        user
    })),
}))
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
    persist(
        (set) => ({
            token: '',
            username: '',
            email: '',
            role: '',
            active: false,
            setToken: (token) => set((state) => ({ ...state, token: token })),
            setUsername: (username) => set((state) => ({ ...state, username: username })),
            setEmail: (email) => set((state) => ({ ...state, email: email })),
            setRole: (role) => set((state) => ({ ...state, role: role })),
            setActive: (active) => set((state) => ({ ...state, active: active })),
        }),
        {
            name: "user-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
);
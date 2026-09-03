import { create } from "zustand";

interface AuthState {
  email: string;
  isLoggedIn: boolean;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: "",
  isLoggedIn: false,

  login: (email: string) =>
    set({
      email: email,
      isLoggedIn: true,
    }),

  logout: () =>
    set({
      email: "",
      isLoggedIn: false,
    }),
}));

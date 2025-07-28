/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface AppState {
  data: any;
  setData: (data: any) => void;
  updateData: (updates: Partial<any>) => void;
}

export const useStore = create<AppState>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  updateData: (updates: Partial<any>) =>
    set((state) => ({
      data: {
        ...state.data,
        character: {
          ...state.data?.character,
          ...updates,
        },
      },
    })),
}));

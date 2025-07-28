import { create } from 'zustand';

interface AppState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: (data: any) => void;
}

export const useStore = create<AppState>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));

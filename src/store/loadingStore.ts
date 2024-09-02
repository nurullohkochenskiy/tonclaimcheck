import create from "zustand";

interface MainLoadingState {
  mainLoading: boolean;
  setMainLoading: (value: boolean) => void;
}

export const useMainLoadingStore = create<MainLoadingState>((set) => ({
  mainLoading: false,
  setMainLoading: (value) => set({ mainLoading: value }),
}));

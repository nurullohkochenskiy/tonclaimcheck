import create from "zustand";

interface PopUpState {
  popUp: boolean;
  notificationFrom: string;
  setPopUp: (value: boolean) => void;
  setNotificationType: (value: string) => void;
}

export const usePopUpStore = create<PopUpState>((set) => ({
  popUp: false,
  notificationFrom: "",
  setPopUp: (value) => set({ popUp: value }),
  setNotificationType: (value) => set({ notificationFrom: value }),
}));

import { create } from "zustand";


export interface IFancySwipeUpModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

// --------------------------------------------------------------------------- //
// ------------- The globale State to open and close ------------------------- //
// --------------------------------------------------------------------------- //
export const useFancySwipeUpModalStore = create<IFancySwipeUpModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
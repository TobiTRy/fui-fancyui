import { create } from 'zustand';

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
interface IModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
export const useModalStore = create<IModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
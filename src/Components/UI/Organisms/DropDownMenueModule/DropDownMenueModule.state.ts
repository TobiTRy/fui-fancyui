import { create } from "zustand";


// --------------------------------------------------------------------------- //
// -------- The Interface structure for the useDropDownMenueModuleStore ------ //
// --------------------------------------------------------------------------- //
export interface DropDownMenueModuleStore {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
};


// --------------------------------------------------------------------------- //
// ----------- This is the global state for the DropDownMenue ---------------- //
// --------------------------------------------------------------------------- //
export const useDropDownMenueModuleStore = create<DropDownMenueModuleStore>((set) => ({
  isOpen: false,
  toggle: () => set((state: DropDownMenueModuleStore) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));
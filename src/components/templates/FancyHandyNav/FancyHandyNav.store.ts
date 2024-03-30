import { create } from 'zustand';

interface IFancyHandyNavStore {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;

  whichIsActive: string;
  setWhichIsActive: (whichIsActive: string) => void;
}

const useFancyHandyNavStore = create<IFancyHandyNavStore>((set) => ({
  isVisible: true,
  setIsVisible: (isVisible: boolean) => set({ isVisible }),

  whichIsActive: '',
  setWhichIsActive: (whichIsActive: string) => set({ whichIsActive }),
}));

export default useFancyHandyNavStore;

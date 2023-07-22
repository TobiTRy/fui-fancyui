import { create } from 'zustand';

interface IFancyBottomBarStaticStore {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;

  whichIsActive: string;
  setWhichIsActive: (whichIsActive: string) => void;
};

const useFancyBottomBarStaticStore = create<IFancyBottomBarStaticStore>((set, get) => ({
  isVisible: true,
  setIsVisible: (isVisible: boolean) => set({ isVisible }),

  whichIsActive: 'home',
  setWhichIsActive: (whichIsActive: string) => set({ whichIsActive }),
}));

export default useFancyBottomBarStaticStore;
import { create } from 'zustand';

interface IYearSelectorState {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

export const useYearSelectorState = create<IYearSelectorState>((set) => ({
  selectedYear: new Date().getFullYear(),
  setSelectedYear: (year: number) => set({ selectedYear: year }),
}));

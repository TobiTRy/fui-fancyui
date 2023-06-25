import { create } from "zustand";

interface IDateOutputFromToState {
  currentlySelected: 'from' | 'to' | undefined;
  setCurrentlySelected: (currentlySelected: 'from' | 'to' | undefined) => void;
};


export const useDateOutputFromToState = create<IDateOutputFromToState>((set) => ({
  currentlySelected: undefined,
  setCurrentlySelected: (currentlySelected: 'from' | 'to' | undefined) => set({ currentlySelected: currentlySelected }),
}));

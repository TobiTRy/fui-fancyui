import { create } from "zustand";

interface IDateOutputFromToState {
  currentlySelected: 'from' | 'to' | undefined;
  setCurrentlySelected: (currentlySelected: 'from' | 'to' | undefined) => void;
};

// --------------------------------------------------------------------------- //
// --------- The global state store for theDateOutputFromTo ------------------ //
// --------------------------------------------------------------------------- //
export const useDateOutputFromToState = create<IDateOutputFromToState>((set) => ({
  currentlySelected: undefined,
  setCurrentlySelected: (currentlySelected: 'from' | 'to' | undefined) => set({ currentlySelected: currentlySelected }),
}));

import { create } from 'zustand';

// --------------------------------------------------------------------------- //
// ------------- The Interface structure for the useEditBarStore ------------- //
// --------------------------------------------------------------------------- //
interface EditBarStore {
  //the active state for the main bar
  activeEditbarItem: string | null;
  setActiveEditbarItem: (index: string | null) => void;

  //the active state for the second bar
  activeSecondEditbarItem: string | null;
  setActiveSecondEditbarItem: (index: string) => void;
}

// --------------------------------------------------------------------------- //
// --------------- This is the global state for the editbar ------------------ //
// --------------------------------------------------------------------------- //
export const useEditBarStore = create<EditBarStore>((set) => ({
  //The State for the bar wich button is currently active
  activeEditbarItem: null,
  setActiveEditbarItem: (index) =>
    set((state) => ({
      activeEditbarItem: state.activeEditbarItem === index ? null : index,
      activeSecondEditbarItem: null,
    })),

  //The State for the secondbar wich button is currently active
  activeSecondEditbarItem: null,
  setActiveSecondEditbarItem: (index) =>
    set((state) => ({
      activeSecondEditbarItem: state.activeSecondEditbarItem === index ? null : index,
    })),
}));

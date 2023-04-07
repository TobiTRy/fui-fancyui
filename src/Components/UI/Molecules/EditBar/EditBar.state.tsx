import { create } from 'zustand';
import { IEditBarIconButton } from '../../Atoms/EditBarIcon/IEditBarIcon';
import { ISectionBoxItem } from './EditBarSettings'
// --------------------------------------------------------------------------- //
// ------------- The Interface structure for the useEditBarStore ------------- //
// --------------------------------------------------------------------------- //
interface EditBarStore {
  //the active state for the main bar
  activeEditbarItem: string | null;
  setActiveEditbarItem: (index: string) => void;

  //the active state for the second bar
  activeSecondEditbarItem: string | null;
  setActiveSecondEditbarItem: (index: string) => void;

  //the current items for the main bar
  currentItems: IEditBarIconButton[] | null;
  setCurrentItems: (items: IEditBarIconButton[]) => void;

  //the active setting for the editbar
  activeEditbarCategory: ISectionBoxItem | null;
  setActiveEditbarCategory: (setting: ISectionBoxItem | null) => void;

  //the current items for the second bar
  secondCurrentItems: IEditBarIconButton[] | null;
  setSecondCurrentItems: (items: IEditBarIconButton[]) => void;

  //the active setting for the editbar
  activeSetting: string | null;
  setActiveSetting: (setting: string) => void;
}

// --------------------------------------------------------------------------- //
// --------------- This is the global state for the editbar ------------------ //
// --------------------------------------------------------------------------- //
export const useEditBarStore = create<EditBarStore>((set) => ({
  //The State for the bar wich button is currently active
  activeEditbarItem: null,
  setActiveEditbarItem: (index) =>
    set((state) => ({ activeEditbarItem: state.activeEditbarItem === index ? null : index, activeSecondEditbarItem: null })),

  //The State for the secondbar wich button is currently active
  activeSecondEditbarItem: null,
  setActiveSecondEditbarItem: (index) =>
    set((state) => ({
      activeSecondEditbarItem: state.activeSecondEditbarItem === index ? null : index,
    })),

  activeEditbarCategory: null,
  setActiveEditbarCategory: (setting) => set(() => ({ activeEditbarCategory: setting })),

  //The State for the currently set bar items
  currentItems: null,
  setCurrentItems: (items) => set(() => ({ currentItems: items })),

  //The State for the second bar items they currently set
  secondCurrentItems: null,
  setSecondCurrentItems: (items) => set(() => ({ secondCurrentItems: items })),
  
  //The State for the active setting
  activeSetting: null,
  setActiveSetting: (setting) => set(() => ({ activeSetting: setting })),

}));

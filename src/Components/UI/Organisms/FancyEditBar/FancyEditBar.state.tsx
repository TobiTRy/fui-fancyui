import { create } from 'zustand';
import { IFancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon';
import { ICategoryItem } from './EditBarItemsStructure/IEditbarObjectSturcture.model';

// --------------------------------------------------------------------------- //
// ------------- The Interface structure for the useEditBarStore ------------- //
// --------------------------------------------------------------------------- //
interface EditBarModuleStore {
  //the current items for the main bar
  currentItems: IFancyBottomBarIcon[] | null;
  setCurrentItems: (items: IFancyBottomBarIcon[]) => void;

  //the active setting for the editbar
  activeEditbarCategory: ICategoryItem | null;
  setActiveEditbarCategory: (setting: ICategoryItem | null) => void;

  //the current items for the second bar
  secondCurrentItems: IFancyBottomBarIcon[] | null;
  setSecondCurrentItems: (items: IFancyBottomBarIcon[]) => void;

  //the active setting for the editbar
  activeSetting: string | null;
  setActiveSetting: (setting: string) => void;
}

// --------------------------------------------------------------------------- //
// --------------- This is the global state for the editbar ------------------ //
// --------------------------------------------------------------------------- //
export const useFancyEditBarStore = create<EditBarModuleStore>((set) => ({
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

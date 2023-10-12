import { create } from 'zustand';

import { ModalStatus } from '../../Interface/ModalStatus';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

export type ModalSettings = {
  isCloseAble?: boolean;
  isScalable?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
};

export interface IFancySwipeUpModal {
  id: string;
  children: React.ReactNode;
  status: ModalStatus;
  settings?: ModalSettings;
}

export interface IFancySwipeUpModalStore {
  modals: IFancySwipeUpModal[];
  openSwipeUpModal: (id: string, children: React.ReactNode, settings: ModalSettings) => void;
  removeSwipeUpModal: (id: string) => void;
  closeSwipeUpModal: (id: string) => void;
}

// --------------------------------------------------------------------------- //
// ------------- The globale State to open and close ------------------------- //
// --------------------------------------------------------------------------- //
export const useFancySwipeUpModalStore = create<IFancySwipeUpModalStore>((set) => ({
  // the state array for the modals
  modals: [],
  // add a new modal to the state array
  openSwipeUpModal: (id, children, settings) => set((state) => ({ modals: [...state.modals, { children, id, status: 'open', settings }] })),
  // change the status of the modal to closing
  closeSwipeUpModal: (id) =>
    set((state) => ({
      modals: state.modals.map((modal) => (modal.id === id ? { ...modal, status: 'closing' } : modal)),
    })),
  // remove the modal from the state array
  removeSwipeUpModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),

  isOpen: false,
}));

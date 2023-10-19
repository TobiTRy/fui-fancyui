import { create } from 'zustand';

import { ModalStatus } from '../../Interface/ModalStatus';
import {ISwipeUpModal} from '../../Molecules/SwipeUpModal/ISwipeUpModal.model';

export type ModalSettings = Omit<ISwipeUpModal, 'isOpen' | 'children' | 'onClose'>;

export interface IFancySwipeUpModal {
  id: string;
  children: React.ReactNode;
  status: ModalStatus;
  config?: ModalSettings;
}

export interface IFancySwipeUpModalStore {
  modals: IFancySwipeUpModal[];
  openSwipeUpModal: (id: string, children: React.ReactNode, config?: ModalSettings) => void;
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
  openSwipeUpModal: (id, children, config) => set((state) => {
    console.log('openSwipeUpModal', id, children, config);
    return { modals: [...state.modals, { children, id, status: 'open', config }] }
  }),
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
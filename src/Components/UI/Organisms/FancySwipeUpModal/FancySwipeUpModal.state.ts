import { create } from 'zustand';
import IFancyModalHeadLine from '../../Molecules/FancyModalHeadLine/FancyModalHeadLine.model';
import { ModalStatus } from '../../Interface/ModalStatus';

export type SwipeUpModalContent = {
  headline?: IFancyModalHeadLine;
  content?: React.ReactNode;
  settings?: {
    isCloseAble: boolean;
    isScalable: boolean;
  }
};

export interface IFancySwipeUpModal {
  id: string;
  content: SwipeUpModalContent;
  status: ModalStatus;
}

export interface IFancySwipeUpModalStore {
  modals: IFancySwipeUpModal[];
  openSwipeUpModal: (modal: SwipeUpModalContent, id?: string) => void;
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
  openSwipeUpModal: (content, id = Math.random().toFixed(4).toString()) =>
    set((state) => ({ modals: [...state.modals, { content, id, status: ModalStatus.Open }] })),
  // change the status of the modal to closing
  closeSwipeUpModal: (id) =>
    set((state) => ({
      modals: state.modals.map((modal) => (modal.id === id ? { ...modal, status: ModalStatus.Closing } : modal)),
    })),
  // remove the modal from the state array
  removeSwipeUpModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),

  isOpen: false,
}));

import { create } from 'zustand';


import IModalHeadLine from '../../Molecules/ModalHeadLine/ModalHeadLine.model';
import IModalBottomLine from '../../Molecules/ModalBottomLine/ModalBottomLine.model';

import { ModalStatus } from '../../Molecules/Modal/ModalStatus';

type ModalContent = {
  headline?: IModalHeadLine;
  content?: React.ReactNode;
  bottomLine?: IModalBottomLine;
};

type IModal = {
  id: string;
  content: ModalContent;
  status: ModalStatus;
};

// --------------------------------------------------------------------------- //
// --------------------- The state for the ModalModuel ----------------------- //
// --------------------------------------------------------------------------- //
interface IModalModule {
  modals: IModal[];
  openModal: (id: string, content: ModalContent) => void;
  closingModal: (id: string) => void;
  closeModal: (id: string) => void;
};
export const useModalModuleStore = create<IModalModule>((set) => ({
  // the state array for the modals
  modals: [],
  // add a new modal to the state array
  openModal: (id, content) =>
    set((state) => ({
      modals: [...state.modals, { id, content, status: ModalStatus.Open }],
    })),
  // change the status of the modal to closing
  closingModal: (id) => 
    set((state) => ({
      modals: state.modals.map(modal => 
        modal.id === id ? { ...modal, status: ModalStatus.Closing } : modal
      ),
    })),
  // remove the modal from the state array
  closeModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),
}));
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
// test 
// --------------------------------------------------------------------------- //
// --------------------- The state for the ModalModuel ----------------------- //
// --------------------------------------------------------------------------- //
interface IModalModule {
  modals: IModal[];
  openModal: (content: ModalContent, id?: string ) => void;
  closingModal: (id: string) => void;
  closeModal: (id: string) => void;
  getModal: (id: string) => IModal | undefined;	
};
export const useModalModuleStore = create<IModalModule>((set) => ({
  // the state array for the modals
  modals: [],

  // function get modal with the id
  getModal: (id) => set((state) => state.modals.find((modal) => modal.id === id)),

  // add a new modal to the state array
  openModal: (content, id = Math.random().toFixed(4).toString(),) =>
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
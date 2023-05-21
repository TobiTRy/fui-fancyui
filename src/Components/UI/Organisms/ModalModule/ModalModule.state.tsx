import { create } from 'zustand';


import IModalHeadLine from '../../Molecules/ModalHeadLine/ModalHeadLine.model';
import IModalBottomLine from '../../Molecules/ModalBottomLine/ModalBottomLine.model';

import { ModalStatus } from '../../Molecules/Modal/ModalStatus';

type ModalContent = {
  headline?: IModalHeadLine;
  content?: React.ComponentType;
  bottomLine?: IModalBottomLine;
};

type IModal = {
  id: string;
  content: ModalContent;
  status: ModalStatus;
};


interface IModalModuleModule {
  modals: IModal[];
  openModal: (id: string, content: ModalContent) => void;
  closingModal: (id: string) => void;
  closeModal: (id: string) => void;
}
export const useModalModuleStore = create<IModalModuleModule>((set) => ({
  modals: [],
  openModal: (id, content) =>
    set((state) => ({
      modals: [...state.modals, { id, content, status: ModalStatus.Open }],
    })),
  closingModal: (id) => 
    set((state) => ({
      modals: state.modals.map(modal => 
        modal.id === id ? { ...modal, status: ModalStatus.Closing } : modal
      ),
    })),
  closeModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),
}));
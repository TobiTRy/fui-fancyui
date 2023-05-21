import { create } from 'zustand';


import IModalHeadLine from '../../Molecules/ModalHeadLine/ModalHeadLine.model';
import IModalBottomLine from '../../Molecules/ModalBottomLine/ModalBottomLine.model';

type ModalContent = {
  headline?: IModalHeadLine;
  content?: React.ComponentType;
  bottomLine?: IModalBottomLine;
};

type IModal = {
  id: string;
  content: ModalContent;
};


interface IModalModuleModule {
  modals: IModal[];
  openModal: (id: string, content: ModalContent) => void;
  closeModal: (id: string) => void;
}
export const useModalModuleStore = create<IModalModuleModule>((set) => ({
  modals: [],
  openModal: (id, content) =>
    set((state) => ({
      modals: [...state.modals, { id, content }],
    })),
  closeModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modals) => modals.id !== id),
    })),
}));

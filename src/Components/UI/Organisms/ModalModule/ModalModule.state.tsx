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
  
  //   openModal(
  //     {
  //       headline: { title: 'test', subTitle: 'test' },
  //       content: <div>hi</div>,
  //       bottomLine: {
  //         buttons: [
  //           {
  //             title: 'submit me',
  //             onClick: () => {
  //               closeModal('test111');
  //             },
  //             secondaryButton: false,
  //           },
  //         ],
  //       },
  //     },
  //     'test111'   // this is the id
  //   );

// --------------------------------------------------------------------------- //
// --------------------- The state for the ModalModuel ----------------------- //
// --------------------------------------------------------------------------- //
interface IModalModule {
  modals: IModal[];
  openModal: (content: ModalContent, id?: string ) => void;
  removeModal: (id: string) => void;
  closeModal: (id: string) => void;
};
export const useModalModuleStore = create<IModalModule>((set, get) => ({
  // the state array for the modals
  modals: [],
  // add a new modal to the state array
  openModal: (content, id = Math.random().toFixed(4).toString(),) =>
    set((state) => ({
      modals: [...state.modals, { id, content, status: ModalStatus.Open }],
    })),
  // change the status of the modal to closing
  closeModal: (id) => 
    set((state) => ({
      modals: state.modals.map(modal => 
        modal.id === id ? { ...modal, status: ModalStatus.Closing } : modal
      ),
    })),
  // remove the modal from the state array
  removeModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),
}));
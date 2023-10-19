import { create } from 'zustand';

import { ModalStatus } from '../../Interface/ModalStatus';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

type TModalConfig = {
  isCloseable?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
};

type IModal = {
  id: string;
  children: React.ReactNode;
  status: ModalStatus;
  config?: TModalConfig;
};

//   openModal(id, <div>hi</div>, {})

// --------------------------------------------------------------------------- //
// --------------------- The state for the ModalModuel ----------------------- //
// --------------------------------------------------------------------------- //
interface IModalModule {
  modals: IModal[];
  openModal: (id: string, content: React.ReactNode, config: TModalConfig) => void;
  removeModal: (id: string) => void;
  closeModal: (id: string) => void;
}
export const useFancyModalStore = create<IModalModule>((set) => ({
  // the state array for the modals
  modals: [],
  // add a new modal to the state array
  openModal: (id, children, config) =>
    set((state) => ({
      modals: [...state.modals, { id, children, status: 'open', config}],
    })),
  // change the status of the modal to closing
  closeModal: (id) =>
    set((state) => ({
      modals: state.modals.map((modal) => (modal.id === id ? { ...modal, status: 'closing' } : modal)),
    })),
  // remove the modal from the state array
  removeModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),
}));

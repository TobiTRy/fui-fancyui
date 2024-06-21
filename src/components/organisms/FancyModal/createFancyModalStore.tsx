import { create } from 'zustand';

import { TModalStatus } from '@/types/TModalStatus';
import { TModal } from '@/components/molecules/Modal';

type TModalConfig = Omit<TModal, 'id' | 'children' | 'status' | 'isOpen'>;

export type TFancyModals = {
  id: string;
  children: React.ReactNode;
  status: TModalStatus;
  config?: TModalConfig;
};

//   openModal(id, <div>hi</div>, {})

// --------------------------------------------------------------------------- //
// --------------------- The state for the ModalModuel ----------------------- //
// --------------------------------------------------------------------------- //
interface IModalModule {
  modals: TFancyModals[];
  openModal: (id: string, content: React.ReactNode, config?: TModalConfig) => void;
  closeModal: (id: string) => void;
}

export function createFancyModalStore() {
  return create<IModalModule>((set) => ({
    modals: [],
    openModal: (id, children, config) =>
      set((state) => ({
        modals: [...state.modals, { id, children, status: 'open', config }],
      })),
    closeModal: (id) => {
      set((state) => ({
        modals: state.modals.map((modal) => (modal.id === id ? { ...modal, status: 'closing' } : modal)),
      }));

      setTimeout(() => {
        // After animation duration (if applicable)
        set((state) => ({
          modals: state.modals.filter((modal) => modal.id !== id),
        }));
      }, 300); // Adjust delay if using a different transition time
    },
  }));
}

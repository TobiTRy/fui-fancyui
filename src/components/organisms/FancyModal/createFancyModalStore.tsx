import { create } from 'zustand';

import { TFancyModalOpen, TFancyModals } from './TFancyModal.modal';

//   openModal(id, <div>hi</div>, {})
// --- //
// ----- The state for the ModalModuel --- //
// --- //
export interface IModalModule {
  modals: TFancyModals[];
  openModal: (props: TFancyModalOpen) => void;
  closeModal: (id: string) => void;
}

export function createFancyModalStore() {
  return create<IModalModule>((set) => ({
    modals: [],
    openModal: ({ id, children, footer, header, config }) =>
      set((state) => ({
        modals: [...state.modals, { id, children, status: 'open', config, footer, header }],
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

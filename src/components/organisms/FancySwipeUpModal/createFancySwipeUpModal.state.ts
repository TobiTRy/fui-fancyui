import { create } from 'zustand';

import { TFancySwipeUpModalStore } from './TFancySwipeUpModal.model';

// --------------------------------------------------------------------------- //
// ------------- The globale State to open and close ------------------------- //
// --------------------------------------------------------------------------- //
export function createFancySwipeUpModalStore() {
  return create<TFancySwipeUpModalStore>((set) => ({
    // the state array for the modals
    modals: [],
    // add a new modal to the state array
    openSwipeUpModal: (id, children, config) =>
      set((state) => {
        return { modals: [...state.modals, { children, id, status: 'open', config }] };
      }),
    // change the status of the modal to closing
    closeSwipeUpModal: (id) => {
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

import { create } from 'zustand';

import { TFancySwipeUpModalStore } from './TFancySwipeUpModal.model';

// --------------------------------------------------------------------------- //
// ------------- The globale State to open and close ------------------------- //
// --------------------------------------------------------------------------- //
export const useFancySwipeUpModalStore = create<TFancySwipeUpModalStore>((set) => ({
  // the state array for the modals
  modals: [],
  // the state for the modal
  isOpen: false,
  // add a new modal to the state array
  openSwipeUpModal: (id, children, config) =>
    set((state) => {
      return { modals: [...state.modals, { children, id, status: 'open', config }] };
    }),
  // change the status of the modal to closing
  closeSwipeUpModal: (id) =>
    set((state) => ({
      modals: state.modals.map((modal) => (modal.id === id ? { ...modal, status: 'closing' } : modal)),
    })),
  // remove the modal from the state array
  removeSwipeUpModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),
}));

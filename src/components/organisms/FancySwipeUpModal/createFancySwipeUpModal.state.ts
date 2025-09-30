import { create } from 'zustand';

import { TFancySwipeUpModalStore } from './TFancySwipeUpModal.model';

// --- //
// ----- The globale State to open and close --- //
// --- //
export function createFancySwipeUpModalStore() {
  return create<TFancySwipeUpModalStore>((set) => ({
    // the state array for the modals
    modals: [],
    heightRecalculationTrigger: {},
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
          heightRecalculationTrigger: Object.fromEntries(
            Object.entries(state.heightRecalculationTrigger).filter(([key]) => key !== id)
          ),
        }));
      }, 300); // Adjust delay if using a different transition time
    },
    // trigger height recalculation for a specific modal
    recalculateHeight: (id) => {
      set((state) => ({
        heightRecalculationTrigger: {
          ...state.heightRecalculationTrigger,
          [id]: (state.heightRecalculationTrigger[id] || 0) + 1,
        },
      }));
    },
  }));
}

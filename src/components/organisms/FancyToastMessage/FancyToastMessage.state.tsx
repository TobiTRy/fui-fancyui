import { create } from 'zustand';

import { TFancyToastMessageStore } from './TFancyToastMessage.model';

//the toastQueue with the add and remove functions
export function createFancyToastMessageStore() {
  return create<TFancyToastMessageStore>((set) => ({
    toastQueue: [],
    // add a new toast to the queue
    addToast: (toast) =>
      set((state) => ({
        toastQueue: [...state.toastQueue, { ...toast, id: Date.now(), time: toast.time || 5000 }],
      })),
    // remove a toast from the queue
    removeToast: (id) =>
      set((state) => ({
        toastQueue: state.toastQueue.filter((toast) => toast.id !== id),
      })),
  }));
}

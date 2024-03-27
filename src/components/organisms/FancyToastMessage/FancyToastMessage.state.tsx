import { create } from 'zustand';

import { TFancyToastMessageStore } from './TFancyToastMessage.model';

//the toastQueue with the add and remove functions
export const useFancyToastMessageStore = create<TFancyToastMessageStore>((set) => ({
  toastQueue: [],
  addToast: (toast) =>
    set((state) => ({
      toastQueue: [...state.toastQueue, { ...toast, id: Date.now(), time: toast.time || 5000 }],
    })),
  removeToast: (id) =>
    set((state) => ({
      toastQueue: state.toastQueue.filter((toast) => toast.id !== id),
    })),
}));

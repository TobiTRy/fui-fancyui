import { create } from 'zustand';
import { TToastMessage } from '@/components/molecules/SingleToastMessage/';

//omit id from TToastMessage because the store will add the id
type IToastMessageProps = Omit<TToastMessage, 'id'>;

type ToastMessageStore = {
  toastQueue: TToastMessage[];
  addToast: (toast: IToastMessageProps) => void;
  removeToast: (id: number) => void;
};
//the toastQueue with the add and remove functions
export const useFancyToastMessageStore = create<ToastMessageStore>((set) => ({
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

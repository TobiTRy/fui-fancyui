import { create } from 'zustand';
import IToastMessage from '../../../Molecules/SingleToastMessage/IToastMessage.model';

//omit id from IToastMessage because the store will add the id
type IToastMessageProps = Omit<IToastMessage, 'id'>;

type ToastMessageStore = {
  toastQueue: IToastMessage[];
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

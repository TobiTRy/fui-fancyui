import { create } from 'zustand';
import IToastMessage from '../../Molecules/SingleToastMessage/IToastMessage.model';

//omit id
type IToastMessageOmitId = Omit<IToastMessage, 'id'>;

type ToastMessageStore = {
  toastQueue: IToastMessage[];
  addToast: (toast: IToastMessageOmitId) => void;
  removeToast: (id: number) => void;
};



export const useToastMessageStore = create<ToastMessageStore>((set) => ({
  toastQueue: [],
  addToast: (toast) =>
    set((state) => ({
      toastQueue: [...state.toastQueue, {...toast, id: Date.now()}],
    })),
  removeToast: (id) =>
    set((state) => ({
      toastQueue: state.toastQueue.filter((toast) => toast.id !== id),
    })),
}));

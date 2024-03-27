import { TToastMessage } from '@/components/molecules/SingleToastMessage';

//omit id from TToastMessage because the store will add the id
export type TFancyToastMessage = Omit<TToastMessage, 'id'>;

export type TFancyToastMessageStore = {
  toastQueue: TToastMessage[];
  addToast: (toast: TFancyToastMessage) => void;
  removeToast: (id: number) => void;
};

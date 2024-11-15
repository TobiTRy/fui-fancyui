import { TToastMessage } from '@/components/molecules/SingleToastMessage';
import { HTMLAttributes } from 'react';
import { CSSProp } from 'styled-components';

export type TFancyToastMessages = {
  externalStyle: CSSProp;
} & HTMLAttributes<HTMLDivElement>;

//omit id from TToastMessage because the store will add the id
export type TFancyToastMessage = Omit<TToastMessage, 'id'>;

export type TFancyToastMessageStore = {
  toastQueue: TToastMessage[];
  addToast: (toast: TFancyToastMessage) => void;
  removeToast: (id: number) => void;
};

import { TModalHTMLAttributes } from '@/components/molecules/Modal';
import { TFancyModals } from '@/components/organisms/FancyModal/createFancyModalStore';
import { CSSProp } from 'styled-components';

export type TFancyModal = {
  appendToDomID: string;
  modals: TFancyModals[];
  closeModal: (id: string) => void;
  externalStyle?: CSSProp;
} & TModalHTMLAttributes;

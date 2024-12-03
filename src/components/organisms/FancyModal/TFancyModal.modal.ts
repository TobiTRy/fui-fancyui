import { CSSObject } from 'styled-components';

import { TModalHTMLAttributes } from '@/components/molecules/Modal';
import { TFancyModals } from '@/components/organisms/FancyModal/createFancyModalStore';

export type TFancyModal = {
  appendToDomID: string;
  modals: TFancyModals[];
  closeModal: (id: string) => void;
  zIndex?: number;
  externalStyle?: CSSObject;
} & TModalHTMLAttributes;

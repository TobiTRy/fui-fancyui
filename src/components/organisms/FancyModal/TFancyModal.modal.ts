import { CSSObject } from 'styled-components';

import { TModalHTMLAttributes, TModalWithHTMLAttributes } from '@/components/molecules/Modal';
import { TModalStatus } from '@/types/TModalStatus';

export type TFancyModal = {
  appendToDomID: string;
  modals: TFancyModals[];
  closeModal: (id: string) => void;
  zIndex?: number;
  externalStyle?: CSSObject;
} & TModalHTMLAttributes;

export type TFancyModalOpen = {
  id: string;
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  config?: TModalConfig;
};

export type TFancyModals = {
  id: string;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  status: TModalStatus;
  config?: TModalConfig;
};

export type TModalConfig = Omit<TModalWithHTMLAttributes, 'id' | 'children' | 'status' | 'isOpen'>;

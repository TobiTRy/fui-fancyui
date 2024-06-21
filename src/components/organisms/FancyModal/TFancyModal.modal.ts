import { TFancyModals } from '@/components/organisms/FancyModal/createFancyModalStore';

export type TFancyModal = {
  appendToDomID: string;
  modals: TFancyModals[];
  closeModal: (id: string) => void;
};

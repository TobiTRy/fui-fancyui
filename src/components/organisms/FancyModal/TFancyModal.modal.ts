import { TFancyModals } from '@/components/organisms/FancyModal/FancyModal.state';

export type TFancyModal = {
  appendToDomID: string;
  modals: TFancyModals[];
  closeModal: (id: string) => void;
};

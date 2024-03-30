import { TModalStatus } from '@/types/TModalStatus';
import { TSwipeUpModal } from '@/components/molecules/SwipeUpModal';

export type TModalSettings = Omit<TSwipeUpModal, 'isOpen' | 'children' | 'onClose'>;

export type TFancySwipeUpModal = {
  id: string;
  children: React.ReactNode;
  status: TModalStatus;
  config?: TModalSettings;
};

export type TFancySwipeUpModalStore = {
  modals: TFancySwipeUpModal[];
  openSwipeUpModal: (id: string, children: React.ReactNode, config?: TModalSettings) => void;
  removeSwipeUpModal: (id: string) => void;
  closeSwipeUpModal: (id: string) => void;
};

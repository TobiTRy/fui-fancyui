import { TModalStatus } from '@/types/TModalStatus';
import { TSwipeUpModalWithHTMLAttrs } from '@/components/molecules/SwipeUpModal';

export type TModalSettings = Omit<TSwipeUpModalWithHTMLAttrs, 'isOpen' | 'children' | 'onClose'>;

export type TFancySwipeUpModal = {
  id: string;
  children: React.ReactNode;
  status: TModalStatus;
  config?: TModalSettings;
};

export type TFancySwipeUpModalStore = {
  modals: TFancySwipeUpModal[];
  openSwipeUpModal: (id: string, children: React.ReactNode, config?: TModalSettings) => void;
  closeSwipeUpModal: (id: string) => void;
};

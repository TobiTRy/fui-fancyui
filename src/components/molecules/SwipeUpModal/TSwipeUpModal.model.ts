import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TSwipeUpModal = {
  isOpen?: boolean;
  children?: React.ReactNode;
  isCloseAble?: boolean; // if a error occurs and the modal should be closeable
  isScalable?: boolean; // if the modal should be static or scalable
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  backdrop?: boolean;
  onClose?: () => void;
};

export type TSwipeUpModalWithHTMLAttrs = TSwipeUpModal & React.HTMLAttributes<HTMLDivElement>;

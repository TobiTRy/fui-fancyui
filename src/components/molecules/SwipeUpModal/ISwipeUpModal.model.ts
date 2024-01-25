import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export interface ISwipeUpModal {
  isOpen?: boolean;
  children?: React.ReactNode;
  isCloseAble?: boolean; // if a error occurs and the modal should be closeable
  isScalable?: boolean; // if the modal should be static or scalable
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  backdrop?: boolean;
  onClose?: () => void;
}

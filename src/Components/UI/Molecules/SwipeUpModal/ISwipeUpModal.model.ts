import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '@/Components/UI/Interface/TLayer';

export interface ISwipeUpModal {
  isOpen?: boolean;
  children?: React.ReactNode;
  isCloseAble?: boolean; // if a error occurs and the modal should be closeable
  isScalable?: boolean; // if the modal should be static or scalable
  themeType?: TUiColors;
  layer?: TLayer;
  backdrop?: boolean;
  onClose?: () => void;
}

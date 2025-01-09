import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { CSSProp } from 'styled-components';

export type TSwipeUpModal = {
  isOpen?: boolean;
  children?: React.ReactNode;
  isCloseable?: boolean; // if a error occurs and the modal should be closeable
  isScalable?: boolean; // if the modal should be static or scalable
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  backdrop?: boolean;
  onClose?: () => void;
  externalStyle?: CSSProp;
};

export type TSwipeUpModalWithHTMLAttrs = TSwipeUpModal & React.HTMLAttributes<HTMLDivElement>;

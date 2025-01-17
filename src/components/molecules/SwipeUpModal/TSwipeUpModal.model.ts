import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { HTMLAttributes, ReactNode } from 'react';
import { CSSProp } from 'styled-components';

export type TSwipeUpModal = {
  isOpen?: boolean;
  children?: ReactNode;
  isCloseable?: boolean; // if a error occurs and the modal should be closeable
  isScalable?: boolean; // if the modal should be static or scalable
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  backdrop?: boolean;
  onClose?: () => void;
  externalStyle: CSSProp;
};

export type TSwipeUpModalWithHTMLAttrs = TSwipeUpModal & Omit<HTMLAttributes<HTMLDivElement>, 'style'>;

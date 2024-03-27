import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TLayer } from '@/types/TLayer';

export type TToastMessage = {
  id: number;
  title: string;
  message: string;
  time?: number;
  themeType: TUiColorsSystemMessage;
  layer?: TLayer;
};

export type TSingleToastMessage = {
  toast: TToastMessage;
  remove?: (id: number) => void;
};

export type TSingleToastMessageWithHTMLAttrs = TSingleToastMessage & React.HTMLAttributes<HTMLDivElement>;

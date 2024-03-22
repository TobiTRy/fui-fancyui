import { TSpacings } from '@/types/TSpacings';

export type TFancyLI = {
  aligned?: 'left' | 'center' | 'right';
  sizeC?: TSpacings;
};

export type TFancyLIWithHTMLAttrs = TFancyLI & React.HTMLAttributes<HTMLLIElement>;

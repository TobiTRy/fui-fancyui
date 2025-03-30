import { TComponentSizes } from '@/types/TComponentSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  iconSize: TComponentSizes;
  fontVariant: TTypographyVariants;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'sm',
    fontVariant: 'subTextFootnote',
  },
  md: {
    iconSize: 'sm',
    fontVariant: 'subTextCaption',
  },
  lg: {
    iconSize: 'md',
    fontVariant: 'bodytextSm',
  },
};

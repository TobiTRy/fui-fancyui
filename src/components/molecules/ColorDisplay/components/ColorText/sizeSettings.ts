import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  typographyVariant: TTypographyVariants;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    typographyVariant: 'subTextFootnote',
  },
  md: {
    typographyVariant: 'bodytextSm',
  },
  lg: {
    typographyVariant: 'interactiveMd',
  },
};

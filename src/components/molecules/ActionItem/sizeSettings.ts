import { globalElementsizes } from '@/design/theme/globalSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  size: keyof typeof globalElementsizes;
  fontSite: TTypographyVariants;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    size: 'sm',
    fontSite: 'interactiveSm',
  },
  md: {
    size: 'md',
    fontSite: 'interactiveMd',
  },
  lg: {
    size: 'lg',
    fontSite: 'interactiveLg',
  },
};

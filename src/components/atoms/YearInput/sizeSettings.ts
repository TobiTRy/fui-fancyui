import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  fontSize: TTypographyVariants;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    fontSize: 'interactiveSm',
  },
  md: {
    fontSize: 'interactiveMd',
  },
  lg: {
    fontSize: 'interactiveLg',
  },
};

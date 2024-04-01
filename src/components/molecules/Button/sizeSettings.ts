import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacingArray } from '@/types/TSpacings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  padding: TSpacingArray;
  fontSize: TTypographyVariants;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xs', 'md'],
    fontSize: 'interactiveSm',
  },
  md: {
    padding: ['xs', 'lg'],
    fontSize: 'interactiveMd',
  },
  lg: {
    padding: ['sm', 'xl'],
    fontSize: 'interactiveLg',
  },
};

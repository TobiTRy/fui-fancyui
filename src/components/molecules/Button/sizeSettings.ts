import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacingArray, TSpacings } from '@/types/TSpacings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  padding: TSpacingArray;
  fontSize: TTypographyVariants;
  lineHeight: TSpacings;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xs', 'md'],
    fontSize: 'interactiveSm',
    lineHeight: 'md',
  },
  md: {
    padding: ['xs', 'lg'],
    fontSize: 'interactiveMd',
    lineHeight: 'lg',
  },
  lg: {
    padding: ['sm', 'lg'],
    fontSize: 'interactiveLg',
    lineHeight: 'md',
  },
};

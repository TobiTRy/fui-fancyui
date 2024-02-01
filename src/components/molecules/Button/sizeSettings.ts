import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacingArray } from '@/types/TSpacings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  height: TGlobalElementSizes;
  padding: TSpacingArray;
  fontSize: TTypographyVariants;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    height: 'sm',
    padding: ['xs', 'md'],
    fontSize: 'interactiveSm',
  },
  md: {
    height: 'md',
    padding: ['sm', 'lg'],
    fontSize: 'interactiveMd',
  },
  lg: {
    height: 'lg',
    padding: ['md', 'xl'],
    fontSize: 'interactiveLg',
  },
};

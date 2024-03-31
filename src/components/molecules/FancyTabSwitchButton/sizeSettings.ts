import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

type TSizeObj = {
  fontSize: TTypographyVariants;
  padding: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    fontSize: 'interactiveSm',
    padding: ['xs', 'md'],
  },
  md: {
    fontSize: 'interactiveMd',
    padding: ['xs', 'lg'],
  },
  lg: {
    fontSize: 'interactiveLg',
    padding: ['sm', 'xl'],
  },
};

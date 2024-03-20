import { TSpacings } from '@/types/TSpacings';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

type TSizeObj = {
  padding: TSpacings;
  borderRadius: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: 'sm',
    borderRadius: ['sm', 'md'],
  },
  md: {
    padding: 'md',
    borderRadius: ['md', 'lg'],
  },
  lg: {
    padding: 'lg',
    borderRadius: ['lg', 'xl'],
  },
};

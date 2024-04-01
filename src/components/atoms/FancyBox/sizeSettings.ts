import { TSpacings } from '@/types/TSpacings';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

type TSizeObj = {
  padding: TThemeArrayOrValueCSS;
  borderRadius: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xxs'],
    borderRadius: 'sm',
  },
  md: {
    padding: ['md', 'lg'],
    borderRadius: 'md',
  },
  lg: {
    padding: ['lg', 'xl'],
    borderRadius: 'lg',
  },
};

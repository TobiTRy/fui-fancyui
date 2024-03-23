import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  padding: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['sm', 'md'],
  },
  md: {
    padding: ['md', 'lg'],
  },
  lg: {
    padding: ['lg', 'xl'],
  },
};

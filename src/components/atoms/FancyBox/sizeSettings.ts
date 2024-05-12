import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  padding: TThemeArrayOrValueCSS;
  borderRadius: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xs', 'md'],
    borderRadius: 'sm',
  },
  md: {
    padding: ['md', 'lg'],
    borderRadius: 'md',
  },
  lg: {
    padding: ['md', 'lg'],
    borderRadius: 'lg',
  },
};

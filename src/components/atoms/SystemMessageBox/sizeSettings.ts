import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  padding: TThemeArrayOrValueCSS;
  borderRadius: TThemeArrayOrValueCSS;
};

// the template for the sizes
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xxs', 'xs'],
    borderRadius: 'xs',
  },
  md: {
    padding: ['xs', 'sm'],
    borderRadius: 'xs',
  },
  lg: {
    padding: ['sm', 'md'],
    borderRadius: 'sm',
  },
};

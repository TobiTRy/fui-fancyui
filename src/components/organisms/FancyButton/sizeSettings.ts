import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  fontSize: TTypographyVariants;
  padding: TThemeArrayOrValueCSS;
  paddingIconAlignLeft: TThemeArrayOrValueCSS;
  paddingIconAlignRight: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xs', 'md'],
    paddingIconAlignLeft: ['xs', 'md', 'xs', 'sm'],
    paddingIconAlignRight: ['xs', 'sm', 'xs', 'md'],
    fontSize: 'interactiveSm',
  },
  md: {
    padding: ['xs', 'lg'],
    paddingIconAlignLeft: ['xs', 'lg', 'xs', 'md'],
    paddingIconAlignRight: ['xs', 'md', 'xs', 'lg'],
    fontSize: 'interactiveMd',
  },
  lg: {
    padding: ['sm', 'xl'],
    paddingIconAlignLeft: ['sm', 'xl', 'sm', 'lg'],
    paddingIconAlignRight: ['sm', 'lg', 'sm', 'xl'],
    fontSize: 'interactiveLg',
  },
};

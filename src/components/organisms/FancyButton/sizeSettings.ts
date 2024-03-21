import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

type TSizeObj = {
  fontSize: TTypographyVariants;
  height: TGlobalElementSizes;
  padding: TThemeArrayOrValueCSS;
  paddingIconAlignLeft: TThemeArrayOrValueCSS;
  paddingIconAlignRight: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    height: 'sm',
    padding: ['xs', 'md'],
    paddingIconAlignLeft: ['xs', 'md', 'xs', 'sm'],
    paddingIconAlignRight: ['xs', 'sm', 'xs', 'md'],
    fontSize: 'interactiveSm',
  },
  md: {
    height: 'md',
    padding: ['sm', 'lg'],
    paddingIconAlignLeft: ['sm', 'lg', 'sm', 'md'],
    paddingIconAlignRight: ['sm', 'md', 'sm', 'lg'],
    fontSize: 'interactiveMd',
  },
  lg: {
    height: 'lg',
    padding: ['md', 'xl'],
    paddingIconAlignLeft: ['md', 'xl', 'md', 'lg'],
    paddingIconAlignRight: ['md', 'lg', 'md', 'xl'],
    fontSize: 'interactiveLg',
  },
};

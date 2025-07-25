import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TglobalElementSizes, TSpacings } from '@/types';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  fontSize: TTypographyVariants;
  padding: TThemeArrayOrValueCSS;
  gap: TSpacings;
  paddingIconAlignLeft: TThemeArrayOrValueCSS;
  paddingIconAlignRight: TThemeArrayOrValueCSS;
  iconSize: TglobalElementSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xs', 'md'],
    gap: '3xs',
    paddingIconAlignLeft: ['xs', 'md', 'xs', 'sm'],
    paddingIconAlignRight: ['xs', 'sm', 'xs', 'md'],
    fontSize: 'interactiveSm',
    iconSize: 'sm',
  },
  md: {
    padding: ['xs', 'lg'],
    gap: '3xs',
    paddingIconAlignLeft: ['xs', 'lg', 'xs', 'md'],
    paddingIconAlignRight: ['xs', 'md', 'xs', 'lg'],
    fontSize: 'interactiveMd',
    iconSize: 'sm',
  },
  lg: {
    padding: ['sm', 'lg'],
    gap: 'xxs',
    paddingIconAlignLeft: ['sm', 'xl', 'sm', 'lg'],
    paddingIconAlignRight: ['sm', 'lg', 'sm', 'xl'],
    fontSize: 'interactiveLg',
    iconSize: 'xs',
  },
};

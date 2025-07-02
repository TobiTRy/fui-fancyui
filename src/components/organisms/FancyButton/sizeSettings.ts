import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TComponentSizesMid, TSpacings } from '@/types';
import { TSizeSettingsMid } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  fontSize: TTypographyVariants;
  padding: TThemeArrayOrValueCSS;
  gap: TSpacings;
  paddingIconAlignLeft: TThemeArrayOrValueCSS;
  paddingIconAlignRight: TThemeArrayOrValueCSS;
  iconSize: TComponentSizesMid;
};

export const sizeSettings: TSizeSettingsMid<TSizeObj> = {
  xs: {
    padding: ['xs', 'sm'],
    gap: 'xxs',
    paddingIconAlignLeft: ['xs', 'sm', 'xs', 'xs'],
    paddingIconAlignRight: ['xs', 'xs', 'xs', 'sm'],
    fontSize: 'interactiveXs',
    iconSize: 'xs',
  },
  sm: {
    padding: ['xs', 'md'],
    gap: 'xxs',
    paddingIconAlignLeft: ['xs', 'md', 'xs', 'sm'],
    paddingIconAlignRight: ['xs', 'sm', 'xs', 'md'],
    fontSize: 'interactiveSm',
    iconSize: 'sm',
  },
  md: {
    padding: ['xs', 'lg'],
    gap: 'xxs',
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
  xl: {
    padding: ['sm', 'xl'],
    gap: 'xxs',
    paddingIconAlignLeft: ['sm', 'xl', 'sm', 'lg'],
    paddingIconAlignRight: ['sm', 'lg', 'sm', 'xl'],
    fontSize: 'interactiveXl',
    iconSize: 'md',
  },
};

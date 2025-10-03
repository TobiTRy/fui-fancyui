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
    padding: ['6px', 'sm'], // 6px top/bottom + 12px font = 24px total height
    gap: 'xxs',
    paddingIconAlignLeft: ['6px', 'sm', '6px', 'xs'],
    paddingIconAlignRight: ['6px', 'xs', '6px', 'sm'],
    fontSize: 'fancyContentXs', // 12px font with 12px line height for matching icon
    iconSize: 'xs',
  },
  sm: {
    padding: ['9px', 'md'], // 9px top/bottom + 14px font = 32px total height
    gap: 'xxs',
    paddingIconAlignLeft: ['9px', 'md', '9px', 'sm'],
    paddingIconAlignRight: ['9px', 'sm', '9px', 'md'],
    fontSize: 'fancyContentSm', // 14px font with 14px line height for matching icon
    iconSize: 'sm',
  },
  md: {
    padding: ['sm', 'lg'], // 12px top/bottom + 16px font = 40px total height
    gap: 'xxs',
    paddingIconAlignLeft: ['sm', 'lg', 'sm', 'md'],
    paddingIconAlignRight: ['sm', 'md', 'sm', 'lg'],
    fontSize: 'fancyContentMd', // 16px font with 16px line height for matching icon
    iconSize: 'md',
  },
  lg: {
    padding: ['14px', 'lg'], // 14px top/bottom + 20px font = 48px total height
    gap: 'xxs',
    paddingIconAlignLeft: ['14px', 'xl', '14px', 'lg'],
    paddingIconAlignRight: ['14px', 'lg', '14px', 'xl'],
    fontSize: 'fancyContentLg', // 20px font with 20px line height for matching icon
    iconSize: 'lg',
  },
  xl: {
    padding: ['16px', 'xl'], // 16px top/bottom + 24px font = 56px total height
    gap: 'xxs',
    paddingIconAlignLeft: ['16px', 'xl', '16px', 'lg'],
    paddingIconAlignRight: ['16px', 'lg', '16px', 'xl'],
    fontSize: 'fancyContentXl', // 24px font with 24px line height for matching icon
    iconSize: 'xl',
  },
};

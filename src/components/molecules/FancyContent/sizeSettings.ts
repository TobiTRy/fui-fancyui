import { TSpacings } from '@/types/TSpacings';
import { TSizeSettingsMid } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';

type TSizeObj = {
  fontSizeTitle: TTypographyVariants;
  fontSizeDescription: TTypographyVariants;
  padding: TSpacings;
  iconPadding?: TSpacings;
  iconSize: TFancySVGAtomSizes;
  iconHeight: string; // Exact height in pixels to match font size
};

// Define the sizes for the FancyContent component
export const sizes: TSizeSettingsMid<TSizeObj> = {
  xs: {
    fontSizeTitle: 'fancyContentXs',
    fontSizeDescription: 'interactiveXs',
    padding: 'xxs',
    iconPadding: 'xxs',
    iconSize: 'xxs',
    iconHeight: '12px',
  },
  sm: {
    fontSizeTitle: 'fancyContentSm',
    fontSizeDescription: 'interactiveSm',
    padding: 'xs',
    iconPadding: 'xxs',
    iconSize: 'xxs',
    iconHeight: '14px', // Matches fancyContentSm font size
  },
  md: {
    fontSizeTitle: 'fancyContentMd',
    fontSizeDescription: 'interactiveMd',
    padding: 'sm',
    iconPadding: 'xxs',
    iconSize: 'xxs',
    iconHeight: '16px', // Matches fancyContentMd font size
  },
  lg: {
    fontSizeTitle: 'fancyContentLg',
    fontSizeDescription: 'interactiveLg',
    padding: 'sm',
    iconPadding: 'xxs',
    iconSize: 'xs',
    iconHeight: '20px', // Updated to match new 20px font size
  },
  xl: {
    fontSizeTitle: 'fancyContentXl',
    fontSizeDescription: 'interactiveXl',
    padding: 'md',
    iconPadding: 'xs',
    iconSize: 'sm',
    iconHeight: '24px', // Updated to match new 24px font size
  },
};

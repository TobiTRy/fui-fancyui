import { TSpacings } from '@/types/TSpacings';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';

type TSizeObj = {
  fontSizeTitle: TTypographyVariants;
  fontSizeDescription: TTypographyVariants;
  padding: TSpacings;
  iconPadding?: TSpacings;
  iconSize: TFancySVGAtomSizes;
};

// Define the sizes for the FancyContent component
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    fontSizeTitle: 'bodytextSm',
    fontSizeDescription: 'interactiveSm',
    padding: 'xs',
    iconPadding: 'xxs',
    iconSize: 'sm',
  },
  md: {
    fontSizeTitle: 'bodytextMd',
    fontSizeDescription: 'interactiveMd',
    padding: 'sm',
    iconPadding: 'xxs',
    iconSize: 'xxs',
  },
  lg: {
    fontSizeTitle: 'bodytextLg',
    fontSizeDescription: 'interactiveLg',
    padding: 'sm',
    iconPadding: 'xxs',
    iconSize: 'xs',
  },
};

import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TSpacings } from '@/types/TSpacings';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  fontSizeTitle: TTypographyVariants;
  fontSizeDescription: TTypographyVariants;
  padding: TSpacings;
};

// Define the sizes for the FancyContent component
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    fontSizeDescription: 'subTextFootnote',
    fontSizeTitle: 'bodytextSm',
    padding: 'xs',
  },
  md: {
    fontSizeDescription: 'bodytextSm',
    fontSizeTitle: 'bodytextMd',
    padding: 'sm',
  },
  lg: {
    fontSizeDescription: 'bodytextLg',
    fontSizeTitle: 'bodytextMd',
    padding: 'md',
  },
};

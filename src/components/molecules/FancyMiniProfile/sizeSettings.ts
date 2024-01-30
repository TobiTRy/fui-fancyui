import { TSpacings } from '@/types/TSpacings';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

// the interface for the different sizes

type TSizeObj = {
  titleSize: TTypographyVariants;
  subtitleSize: TTypographyVariants;
  gap: TSpacings;
  paddingToEdge: TSpacings;
};

// the stettings for the different sizes
export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    paddingToEdge: 'xs',
    titleSize: 'subTextFootnote',
    gap: 'xxs',
    subtitleSize: 'subTextFootnote',
  },
  md: {
    paddingToEdge: 'sm',
    gap: 'xxs',
    titleSize: 'bodytextSm',
    subtitleSize: 'bodytextSm',
  },
  lg: {
    paddingToEdge: 'sm',
    gap: 'xs',
    titleSize: 'bodytextMd',
    subtitleSize: 'subTextFootnote',
  },
};

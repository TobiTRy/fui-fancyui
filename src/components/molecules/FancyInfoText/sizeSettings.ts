import { TComponentSizes } from '@/types';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  iconSize: TComponentSizes;
  title: TTypographyVariants;
  descriptionSize: TTypographyVariants;
};

// the template for the sizes
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'sm',
    title: 'subTextFootnote',
    descriptionSize: 'subTextFootnote',
  },
  md: {
    iconSize: 'md',
    title: 'bodytextMd',
    descriptionSize: 'bodytextMd',
  },
  lg: {
    iconSize: 'md',
    title: 'bodytextLg',
    descriptionSize: 'bodytextLg',
  },
};

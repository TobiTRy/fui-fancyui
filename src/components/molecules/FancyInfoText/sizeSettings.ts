import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  iconSize: TFancySVGAtomSizes;
  title: TTypographyVariants;
  descriptionSize: TTypographyVariants;
};

// the template for the sizes
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'xxs',
    title: 'subTextFootnote',
    descriptionSize: 'subTextFootnote',
  },
  md: {
    iconSize: 'sm',
    title: 'bodytextMd',
    descriptionSize: 'bodytextMd',
  },
  lg: {
    iconSize: 'sm',
    title: 'bodytextLg',
    descriptionSize: 'bodytextLg',
  },
};

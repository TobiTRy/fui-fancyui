import { TSVGAtomSizes } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  iconSize: TSVGAtomSizes;
  title: TTypographyVariants;
  descriptionSize: TTypographyVariants;
};

// the template for the sizes
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'xs',
    title: 'bodytextSm',
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
    descriptionSize: 'bodytextMd',
  },
};

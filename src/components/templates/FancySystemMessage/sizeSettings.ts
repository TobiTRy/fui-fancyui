import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSystemMessage } from '@/components/molecules/SystemMessage';

type TSizeObj = {
  iconSize: TFancySVGAtomSizes;
  title: TTypographyVariants;
  descriptionSize: TTypographyVariants;
  systemMessageSize: TSystemMessage['sizeC'];
};

// the template for the sizes
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'xs',
    title: 'bodytextSm',
    descriptionSize: 'subTextFootnote',
    systemMessageSize: 'xs'
  },
  md: {
    iconSize: 'xs',
    title: 'bodytextMd',
    descriptionSize: 'bodytextMd',
    systemMessageSize: 'xs'
  },
  lg: {
    iconSize: 'sm',
    title: 'bodytextLg',
    descriptionSize: 'bodytextMd',
    systemMessageSize: 'md'
  },
};

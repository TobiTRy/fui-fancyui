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
    iconSize: 'xxs',
    title: 'subTextCaption',
    descriptionSize: 'subTextFootnote',
    systemMessageSize: 'sm',
  },
  md: {
    iconSize: 'xxs',
    title: 'bodytextSm',
    descriptionSize: 'subTextCaption',
    systemMessageSize: 'md',
  },
  lg: {
    iconSize: 'xxs',
    title: 'bodytextMd',
    descriptionSize: 'bodytextSm',
    systemMessageSize: 'lg',
  },
};

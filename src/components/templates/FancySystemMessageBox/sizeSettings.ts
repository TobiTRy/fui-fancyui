import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSystemMessageBox } from '@/components/atoms/SystemMessageBox/TSystemMessageBox.model';
import { TSpacings } from '@/types/TSpacings';

type TSizeObj = {
  iconSize: TFancySVGAtomSizes;
  title: TTypographyVariants;
  descriptionSize: TTypographyVariants;
  systemMessageSize: TSystemMessageBox['sizeC'];
  gap: TSpacings;
};

// the template for the sizes
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'xxs',
    title: 'subTextCaption',
    descriptionSize: 'subTextFootnote',
    systemMessageSize: 'sm',
    gap: 'xs',
  },
  md: {
    iconSize: 'xxs',
    title: 'bodytextSm',
    descriptionSize: 'subTextCaption',
    systemMessageSize: 'md',
    gap: 'xs',
  },
  lg: {
    iconSize: 'xxs',
    title: 'bodytextMd',
    descriptionSize: 'bodytextSm',
    systemMessageSize: 'lg',
    gap: 'sm',
  },
};

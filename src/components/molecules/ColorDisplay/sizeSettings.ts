import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TglobalElementSizes } from '@/types/TglobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  height: TglobalElementSizes;
  borderRadius: TBorderRadiusSizes;
  typographyVariant: TTypographyVariants;
  iconSize: TFancySVGAtomSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    height: 'xxs',
    borderRadius: 'xxs',
    typographyVariant: 'subTextFootnote',
    iconSize: 'xxxs',
  },
  md: {
    height: 'xs',
    borderRadius: 'xs',
    typographyVariant: 'interactiveMd',
    iconSize: 'xxs',
  },
  lg: {
    height: 'sm',
    borderRadius: 'sm',
    typographyVariant: 'interactiveLg',
    iconSize: 'xs',
  },
};

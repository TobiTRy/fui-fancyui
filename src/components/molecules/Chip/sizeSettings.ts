import { globalElementsizes } from '@/design/theme/globalSizes';
import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';

export const sizesSettings = {
  sm: {
    height: globalElementsizes.xs,
    deleteButtonSize: 'xxxs' as TFancySVGAtomSizes,
    iconSize: 'xxs' as TFancySVGAtomSizes,
  },
  md: {
    height: globalElementsizes.sm,
    deleteButtonSize: 'xxxs' as TFancySVGAtomSizes,
    iconSize: 'xxs' as TFancySVGAtomSizes,
  },
  lg: {
    height: globalElementsizes.md,
    deleteButtonSize: 'xxxs' as TFancySVGAtomSizes,
    iconSize: 'xs' as TFancySVGAtomSizes,
  },
};

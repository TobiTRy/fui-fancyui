import { globalElementSizes } from '@/design/theme/globalSizes';
import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';

export const sizesSettings = {
  sm: {
    height: globalElementSizes.xs,
    deleteButtonSize: 'xxxs' as TFancySVGAtomSizes,
    iconSize: 'xxs' as TFancySVGAtomSizes,
  },
  md: {
    height: globalElementSizes.sm,
    deleteButtonSize: 'xxxs' as TFancySVGAtomSizes,
    iconSize: 'xxs' as TFancySVGAtomSizes,
  },
  lg: {
    height: globalElementSizes.md,
    deleteButtonSize: 'xxxs' as TFancySVGAtomSizes,
    iconSize: 'xs' as TFancySVGAtomSizes,
  },
};

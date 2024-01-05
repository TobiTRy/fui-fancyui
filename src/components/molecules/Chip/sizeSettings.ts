import { globalElementsizes } from '@/design/theme/globalSizes';
import { TSVGAtomSizes } from '@/components/atoms/FancySVGAtom/FancySVGAtom.model';

export const sizesSettings = {
  sm: {
    height: globalElementsizes.xs,
    deleteButtonSize: 'xxxs' as TSVGAtomSizes,
    iconSize: 'xxs' as TSVGAtomSizes,
  },
  md: {
    height: globalElementsizes.sm,
    deleteButtonSize: 'xxxs' as TSVGAtomSizes,
    iconSize: 'xxs' as TSVGAtomSizes,
  },
  lg: {
    height: globalElementsizes.md,
    deleteButtonSize: 'xxxs' as TSVGAtomSizes,
    iconSize: 'xs' as TSVGAtomSizes,
  },
};

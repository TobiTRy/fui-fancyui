import { globalElementsizes } from '@/design/theme/globalSizes';
import { TSizes } from '@/components/atoms/FancySVGAtom/FancySVGAtom.model';

export const sizesSettings = {
  sm: {
    height: globalElementsizes.xs,
    deleteButtonSize: 'xxxs' as TSizes,
    iconSize: 'xxs' as TSizes,
  },
  md: {
    height: globalElementsizes.sm,
    deleteButtonSize: 'xxxs' as TSizes,
    iconSize: 'xxs' as TSizes,
  },
  lg: {
    height: globalElementsizes.md,
    deleteButtonSize: 'xxxs' as TSizes,
    iconSize: 'xs' as TSizes,
  },
};

import { globalElementsizes } from '@/design/theme/globalSizes';
import { TSpacingArray } from '@/types/TSpacings';

export const sizeSettings = {
  sm: {
    height: globalElementsizes.sm,
    padding: ['xs', 'md'] as TSpacingArray,
  },
  md: {
    height: globalElementsizes.md,
    padding: ['sm', 'lg'] as TSpacingArray,
  },
  lg: {
    height: globalElementsizes.lg,
    padding: ['md', 'xl'] as TSpacingArray,
  },
};

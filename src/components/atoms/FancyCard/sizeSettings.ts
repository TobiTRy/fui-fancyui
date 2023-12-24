import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

export const sizeSettings = {
  sm: {
    padding: ['xl'] as TArrayToCssValues,
    borderRadius: 'sm' as TBorderRadiusSizes,
  },
  md: {
    padding: ['xl'] as TArrayToCssValues,
    borderRadius: 'sm' as TBorderRadiusSizes,
  },
  lg: {
    padding: ['xl'] as TArrayToCssValues,
    borderRadius: 'xl' as TBorderRadiusSizes,
  },
};

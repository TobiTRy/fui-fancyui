import { globalSizes } from '@/design/theme/globalSizes';
import { TComponentSizes } from '@/types/TComponentSizes';

export const sizeSettings = {
  sm: {
    height: globalSizes.xs.padding as TComponentSizes,
    margin: globalSizes.xs.padding as TComponentSizes,
  },
  md: {
    height: globalSizes.xs.padding as TComponentSizes,
    margin: globalSizes.xs.padding as TComponentSizes,
  },
  lg: {
    height: globalSizes.sm.padding as TComponentSizes,
    margin: parseFloat(globalSizes.xxs.padding as TComponentSizes) + 2 + 'px',
  },
};

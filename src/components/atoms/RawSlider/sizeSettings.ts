import { globalSizes } from '@/design/theme/globalSizes';
import { TComponentSizes } from 'lib';

export const sizeSettings = {
  sm: {
    height: globalSizes.xxs.padding as TComponentSizes,
  },
  md: {
    height: globalSizes.xs.padding as TComponentSizes,
  },
  lg: {
    height: globalSizes.sm.padding as TComponentSizes,
  },
};

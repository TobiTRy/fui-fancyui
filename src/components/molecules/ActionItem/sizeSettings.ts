import { globalElementsizes } from '@/design/theme/globalSizes';
import { TSizeSettingsExtended } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  size: keyof typeof globalElementsizes;
  fontSize: TTypographyVariants;
};

export const sizeSettings: TSizeSettingsExtended<TSizeObj> = {
  xxs: {
    size: 'xxs',
    fontSize: 'interactiveSm',
  },
  xs: {
    size: 'xs',
    fontSize: 'interactiveSm',
  },
  sm: {
    size: 'sm',
    fontSize: 'interactiveSm',
  },
  md: {
    size: 'md',
    fontSize: 'interactiveMd',
  },
  lg: {
    size: 'lg',
    fontSize: 'interactiveLg',
  },
  xl: {
    size: 'xl',
    fontSize: 'interactiveLg',
  },
  xxl: {
    size: 'xxl',
    fontSize: 'interactiveLg',
  },
};

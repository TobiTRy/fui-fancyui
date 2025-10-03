import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TSizeSettingsExtended } from '@/types/TSizeSettings';

type TSizeObj = {
  padding: TThemeArrayOrValueCSS;
  borderRadius: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettingsExtended<TSizeObj> = {
  xxs: {
    padding: ['xxs'],
    borderRadius: 'xs',
  },
  xs: {
    padding: ['xs'],
    borderRadius: 'xs',
  },
  sm: {
    padding: ['sm'],
    borderRadius: 'sm',
  },
  md: {
    padding: ['md'],
    borderRadius: 'md',
  },
  lg: {
    padding: ['lg'],
    borderRadius: 'lg',
  },
  xl: {
    padding: ['xl'],
    borderRadius: 'xl',
  },
  xxl: {
    padding: ['xxl'],
    borderRadius: 'xxl',
  },
  '3xl': {
    padding: ['xxl'],
    borderRadius: 'xxl',
  },
  '4xl': {
    padding: ['xxl'],
    borderRadius: 'xxl',
  },
  '5xl': {
    padding: ['xxl'],
    borderRadius: 'xxl',
  },
  '6xl': {
    padding: ['xxl'],
    borderRadius: 'xxl',
  },
  '7xl': {
    padding: ['xxl'],
    borderRadius: 'xxl',
  },
  '8xl': {
    padding: ['xxl'],
    borderRadius: 'xxl',
  },
};

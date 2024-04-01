import { TThemeValueOrCSS } from '@/design/designFunctions/getThemeOrValueAsCss';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  padding: TThemeValueOrCSS;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: '0',
  },
  md: {
    padding: 'xxs',
  },
  lg: {
    padding: 'xxs',
  },
};

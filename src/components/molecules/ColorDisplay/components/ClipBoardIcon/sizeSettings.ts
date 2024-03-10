import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  iconSize: TFancySVGAtomSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'xxxs',
  },
  md: {
    iconSize: 'xxs',
  },
  lg: {
    iconSize: 'xs',
  },
};

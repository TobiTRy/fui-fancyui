import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  sizeIcon: TFancySVGAtomSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    sizeIcon: 'xs',
  },
  md: {
    sizeIcon: 'sm',
  },
  lg: {
    sizeIcon: 'md',
  },
};

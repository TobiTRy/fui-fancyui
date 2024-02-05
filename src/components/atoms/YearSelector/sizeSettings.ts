import { TSVGAtomSizes } from '@/components/atoms/FancySVGAtom/FancySVGAtom.model';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  iconSize: TSVGAtomSizes;
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

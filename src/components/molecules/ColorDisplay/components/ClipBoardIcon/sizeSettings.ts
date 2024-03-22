import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacings } from '@/types/TSpacings';

type TSizeObj = {
  iconSize: TFancySVGAtomSizes;
  spaceRight?: TSpacings;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'xxxs',
    spaceRight: 'xxs',
  },
  md: {
    iconSize: 'xxs',
    spaceRight: 'xs',
  },
  lg: {
    iconSize: 'xxs',
    spaceRight: 'sm',
  },
};

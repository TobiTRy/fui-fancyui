import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TglobalElementSizes } from '@/types/TglobalElementSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TSpacingArray } from '@/types/TSpacings';

type TSizeObj = {
  padding: TSpacingArray;
  iconSize: TFancySVGAtomSizes;
  height?: TglobalElementSizes;
  borderRadius?: TBorderRadiusSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xxs', 'xs'],
    height: 'sm',
    iconSize: 'xxxs',
    borderRadius: 'sm',
  },
  md: {
    padding: ['xs', 'sm'],
    height: 'md',
    borderRadius: 'md',
    iconSize: 'xxs',
  },
  lg: {
    padding: ['sm', 'md'],
    iconSize: 'xs',
    borderRadius: 'lg',
    height: 'lg',
  },
};

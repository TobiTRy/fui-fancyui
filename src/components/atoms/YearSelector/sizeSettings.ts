import { TSVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

type TSizeObj = {
  iconSize: TSVGAtomSizes;
  height?: TGlobalElementSizes;
  borderRadius?: TBorderRadiusSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    height: 'sm',
    iconSize: 'xxxs',
    borderRadius: 'sm',
  },
  md: {
    height: 'md',
    borderRadius: 'md',
    iconSize: 'xxs',
  },
  lg: {
    iconSize: 'xs',
    borderRadius: 'lg',
    height: 'lg',
  },
};

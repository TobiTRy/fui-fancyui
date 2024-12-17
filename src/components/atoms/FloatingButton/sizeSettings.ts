import { TFancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  height: TglobalElementSizes;
  iconSize: TFancySVGAtom['sizeC'];
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    height: 'lg',
    iconSize: 'sm',
  },
  md: {
    height: 'xl',
    iconSize: 'md',
  },
  lg: {
    height: 'xxl',
    iconSize: 'lg',
  },
};

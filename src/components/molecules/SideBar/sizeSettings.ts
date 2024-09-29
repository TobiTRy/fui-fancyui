import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TglobalElementSizes } from '@/types/TglobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacings } from '@/types/TSpacings';

type TSizeObj = {
  width: TglobalElementSizes;
  borderRadius: TBorderRadiusSizes;
  gapBetweenItems: TSpacings;
  paddingBottomTop: TSpacings;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    width: 'md',
    borderRadius: 'xs',
    gapBetweenItems: 'xxs',
    paddingBottomTop: 'xxs',
  },
  md: {
    width: 'lg',
    borderRadius: 'sm',
    gapBetweenItems: 'xs',
    paddingBottomTop: 'xs',
  },
  lg: {
    width: 'xl',
    borderRadius: 'md',
    gapBetweenItems: 'sm',
    paddingBottomTop: 'xs',
  },
};

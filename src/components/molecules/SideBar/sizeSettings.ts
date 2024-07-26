import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacings } from '@/types/TSpacings';

type TSizeObj = {
  width: TGlobalElementSizes;
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

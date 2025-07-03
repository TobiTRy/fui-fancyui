import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettingsMid } from '@/types/TSizeSettings';
import { TSpacings } from '@/types/TSpacings';

type TSizeObj = {
  width: TglobalElementSizes;
  borderRadius: TBorderRadiusSizes;
  gapBetweenItems: TSpacings;
  paddingBottomTop: TSpacings;
};

export const sizeSettings: TSizeSettingsMid<TSizeObj> = {
  xs: {
    width: 'sm',
    borderRadius: 'xxs',
    gapBetweenItems: 'xxs',
    paddingBottomTop: 'xxs',
  },
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
    gapBetweenItems: 'xs',
    paddingBottomTop: 'xs',
  },
  xl: {
    width: 'xxl',
    borderRadius: 'lg',
    gapBetweenItems: 'sm',
    paddingBottomTop: 'sm',
  },
};

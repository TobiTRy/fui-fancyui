import { TFancyBox } from '@/components/atoms/FancyBox';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettingsMid } from '@/types/TSizeSettings';
import { TSpacings } from '@/types/TSpacings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  boxSize: TFancyBox['sizeC'];
  gapBetweenItems: TSpacings;
  borderRadius: TBorderRadiusSizes;
  iconSize: TglobalElementSizes;
  labelSize: TTypographyVariants;
  wrapperMargin: TThemeArrayOrValueCSS;
  padding: TThemeArrayOrValueCSS;
  paddingWide?: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettingsMid<TSizeObj> = {
  xs: {
    wrapperMargin: [0, 0],
    boxSize: 'xxs',
    padding: 'xxs',
    paddingWide: ['xxs', 'xxs'],
    gapBetweenItems: 'xxs',
    borderRadius: 'xxs',
    iconSize: 'xxs',
    labelSize: 'subTextCaption',
  },
  sm: {
    wrapperMargin: [0, 0],
    boxSize: 'xxs',
    padding: 'xs',
    paddingWide: ['xxs', 'xs'],
    gapBetweenItems: 'xs',
    borderRadius: 'xxs',
    iconSize: 'xxs',
    labelSize: 'subTextCaption',
  },
  md: {
    wrapperMargin: [0, 0],
    padding: 'xs',
    paddingWide: ['sm', 'sm'],
    boxSize: 'xs',
    gapBetweenItems: 'sm',
    borderRadius: 'xxs',
    iconSize: 'xxs',
    labelSize: 'bodytextSm',
  },
  lg: {
    wrapperMargin: [0, 0],
    padding: 'xs',
    paddingWide: ['xs', 'sm'],
    boxSize: 'xs',
    gapBetweenItems: 'md',
    borderRadius: 'sm',
    iconSize: 'xs',
    labelSize: 'bodytextMd',
  },
  xl: {
    wrapperMargin: [0, 0],
    padding: 'sm',
    paddingWide: ['sm', 'md'],
    boxSize: 'sm',
    gapBetweenItems: 'lg',
    borderRadius: 'md',
    iconSize: 'sm',
    labelSize: 'bodytextLg',
  },
};

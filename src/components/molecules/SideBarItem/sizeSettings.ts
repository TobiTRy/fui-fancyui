import { TFancyBox } from '@/components/atoms/FancyBox';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
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

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    wrapperMargin: [0, 'xxs'],
    boxSize: 'xs',
    padding: 'xs',
    paddingWide: ['xs', 'md'],
    gapBetweenItems: 'xs',
    borderRadius: 'xxs',
    iconSize: 'xxs',
    labelSize: 'subTextCaption',
  },
  md: {
    wrapperMargin: [0, 'xs'],
    padding: 'xs',
    paddingWide: ['xs', 'md'],
    boxSize: 'xs',
    gapBetweenItems: 'sm',
    borderRadius: 'xxs',
    iconSize: 'xxs',
    labelSize: 'bodytextSm',
  },
  lg: {
    wrapperMargin: [0, 'xs'],
    padding: 'xs',
    paddingWide: ['xs', 'md'],
    boxSize: 'xs',
    gapBetweenItems: 'md',
    borderRadius: 'sm',
    iconSize: 'xs',
    labelSize: 'bodytextMd',
  },
};

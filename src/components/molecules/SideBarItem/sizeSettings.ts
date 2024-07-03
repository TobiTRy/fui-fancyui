import { TFancyBox } from '@/components/atoms/FancyBox';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSpacings } from '@/types/TSpacings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  boxSize: TFancyBox['sizeC'];
  gapBetweenItems: TSpacings;
  borderRadius: TBorderRadiusSizes;
  iconSize: TGlobalElementSizes;
  labelSize: TTypographyVariants;
  wrapperMargin: TThemeArrayOrValueCSS;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    boxSize: 'xs',
    wrapperMargin: [0, 'xxs'],
    gapBetweenItems: 'xs',
    borderRadius: 'xs',
    iconSize: 'xxs',
    labelSize: 'subTextCaption',
  },
  md: {
    wrapperMargin: [0, 'xs'],
    boxSize: 'xs',
    gapBetweenItems: 'sm',
    borderRadius: 'sm',
    iconSize: 'xxs',
    labelSize: 'bodytextSm',
  },
  lg: {
    wrapperMargin: [0, 'xs'],
    boxSize: 'xs',
    gapBetweenItems: 'md',
    borderRadius: 'md',
    iconSize: 'xs',
    labelSize: 'bodytextMd',
  },
};

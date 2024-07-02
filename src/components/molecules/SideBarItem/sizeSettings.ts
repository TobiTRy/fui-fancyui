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
    wrapperMargin: [0, 'xxs'],
    boxSize: 'xxs',
    gapBetweenItems: 'xs',
    borderRadius: 'xs',
    iconSize: 'xxs',
    labelSize: 'bodytextSm',
  },
  md: {
    wrapperMargin: [0, 'xs'],
    boxSize: 'xs',
    gapBetweenItems: 'sm',
    borderRadius: 'sm',
    iconSize: 'sm',
    labelSize: 'bodytextMd',
  },
  lg: {
    wrapperMargin: [0, 'sm'],
    boxSize: 'sm',
    gapBetweenItems: 'md',
    borderRadius: 'md',
    iconSize: 'md',
    labelSize: 'bodytextLg',
  },
};

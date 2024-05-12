import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { CSSProp } from 'styled-components';

export type TColoredText = {
  children?: React.ReactNode;
  themeType?: TUiColorTypes;
  layer?: TLayer;
  hoverLayer?: TLayer;
  externalStyle?: CSSProp;
};

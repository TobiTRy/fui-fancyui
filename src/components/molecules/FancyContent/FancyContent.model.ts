import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';
import { TLayer } from '@/interface/TLayer';
import { CSSProp } from 'styled-components';

export type TFancyContentProps = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gapBetweenText?: string;
  gapBetweenIcon?: string;
  children?: React.ReactNode;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
  alignIcon?: 'left' | 'right';
};

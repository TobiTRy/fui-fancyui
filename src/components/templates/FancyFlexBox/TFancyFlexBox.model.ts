import { TThemeValueOrCSS } from '@/design/designFunctions/getThemeOrValueAsCss';
import React, { ElementType } from 'react';
import { CSSProp } from 'styled-components';

// Define the style props
export type TStyleProps = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  externalStyle?: CSSProp;
  gap?: TThemeValueOrCSS;
};

// Props specific to FancyFlexBox
export type TFancyFlexBox = {
  separator?: React.ReactNode;
  fitBox?: boolean;
} & TStyleProps;

// Props for dynamic element type
export type TDynamicElementProps<T extends ElementType> = {
  as?: ElementType;
} & React.HTMLAttributes<T>;

export type TFancyFlexBoxWithDynamicElAttrs<T extends ElementType = 'div'> = TDynamicElementProps<T> & TFancyFlexBox;

import React from 'react';
import { CSSProp } from 'styled-components';

// Define the style props
export type TStyleProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  externalStyle?: CSSProp;
  gap?: string;
};

// Props specific to FancyFlexBox
export type TFancyFlexBoxProps = {
  separator?: React.ReactNode;
  fitBox?: boolean;
} & TStyleProps;

// Props for dynamic element type
export type TDynamicElementProps<T extends React.ElementType> = {
  as?: T;
} & Omit<React.ComponentProps<T>, 'as'>;

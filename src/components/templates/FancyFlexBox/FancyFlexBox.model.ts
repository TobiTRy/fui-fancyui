import { CSSProp } from 'styled-components';

export type TStyleProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  externalStyle?: CSSProp;
  gap?: string;
  as?: React.ElementType;
};

export type FancyFlexBoxProps = {
  children?: React.ReactNode;
  separator?: React.ReactNode;
  externalStyle?: CSSProp;
  as?: React.ElementType;
} & TStyleProps;

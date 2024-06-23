import { CSSProp } from 'styled-components';
import { ICustomBreakpoint } from '@/components/templates/FancyGrid/FancyGrid.model';
import { TDynamicElement } from 'lib';

export type TFancyGridItemProps = {
  gridSpace?: number;
  gridColumn?: string | number;
  gridRow?: string | number;
  children?: React.ReactNode;
  breakpoints?: ICustomBreakpoint[];
  externalStyle?: CSSProp;
};

export type TFancyGridItemDynamicProps<T extends React.ElementType = 'div'> = TFancyGridItemProps & TDynamicElement<T>;

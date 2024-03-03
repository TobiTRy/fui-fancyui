import { CSSProp } from 'styled-components';
import { ICustomBreakpoint } from '@/components/templates/FancyGrid/FancyGrid.model';

export type FancyGridItemProps = {
  gridSpace: number;
  children?: React.ReactNode;
  breakpoints?: ICustomBreakpoint[];
  externalStyle?: CSSProp;
};

import { CSSProp } from 'styled-components';

export type TGridItem = {
  gridArea: string;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
};

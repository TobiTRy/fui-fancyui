import { CSSProp } from 'styled-components';

export type TBackDrop = {
  isOpen: boolean;
  onClick?: () => void;
  externalStyle?: CSSProp;
};

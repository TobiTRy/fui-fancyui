import { CSSProp } from 'styled-components';

export type TFancyNavBar = {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
};

export type TFancyNavBarWithHTMLProps = TFancyNavBar & React.HTMLAttributes<HTMLElement>;

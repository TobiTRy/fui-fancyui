import { IGenerateThemeForCardProps } from '@/design/designFunctions/generateThemeForCard';
import { CSSProp } from 'styled-components';

export type THeader = IGenerateThemeForCardProps & {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
};

export type THeaderWithHTMLAttributes = THeader & React.HTMLAttributes<HTMLHeadingElement>;

import { CSSProp } from 'styled-components';

import { IGenerateThemeDesignForComponentProps } from '@/design/designFunctions/generateThemeDesignForComponent';

export type IButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  wide?: boolean;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  disabled?: boolean;
} & IGenerateThemeDesignForComponentProps;

type ButtonHTML = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorHTML = React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Using conditional type based on the 'as' prop
export type IButton = IButtonProps & (({ as?: 'button' } & ButtonHTML) | ({ as: 'a' } & AnchorHTML));

import { CSSProp } from 'styled-components';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TGenerateThemeDesignForComponentProps } from '@/design/designFunctions/generateThemeDesignForComponent';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TButton = {
  sizeC?: TComponentSizes;
  wide?: boolean;
  children?: ReactNode;
  externalStyle?: CSSProp;
  disabled?: boolean;
  notAButton?: boolean;
  noSize?: boolean;
  borderRadius?: TThemeArrayOrValueCSS | false;
  appendClassNameOnStyle?: boolean;
} & TGenerateThemeDesignForComponentProps;

type ButtonHTML = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorHTML = AnchorHTMLAttributes<HTMLAnchorElement>;

// Using conditional type based on the 'as' prop
export type TButtonWithNativeAttrs = TButton & (({ as?: 'button' } & ButtonHTML) | ({ as: 'a' } & AnchorHTML));

import { CSSProp } from 'styled-components';

import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TGenerateThemeDesignForComponentProps } from '@/design/designFunctions/generateThemeDesignForComponent';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TButton = {
  sizeC?: TComponentSizes;
  wide?: boolean;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  disabled?: boolean;
  notAButton?: boolean;
  noSize?: boolean;
  borderRadius?: TThemeArrayOrValueCSS | false;
  appendClassNameOnStyle?: boolean;
} & TGenerateThemeDesignForComponentProps;

type ButtonHTML = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorHTML = React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Using conditional type based on the 'as' prop
export type TButtonWithNativeAttrs = TButton & (({ as?: 'button' } & ButtonHTML) | ({ as: 'a' } & AnchorHTML));

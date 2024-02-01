import { CSSProp } from 'styled-components';

import { IGenerateThemeDesignForComponentProps } from '@/design/designFunctions/generateThemeDesignForComponent';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

export type IButtonProps = {
  sizeC?: TComponentSizes;
  wide?: boolean;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  disabled?: boolean;
  notAButton?: boolean;
  noSize?: boolean;
  borderRadius?: TBorderRadiusSizes | false;
} & IGenerateThemeDesignForComponentProps;

type ButtonHTML = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorHTML = React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Using conditional type based on the 'as' prop
export type IButton = IButtonProps & (({ as?: 'button' } & ButtonHTML) | ({ as: 'a' } & AnchorHTML));

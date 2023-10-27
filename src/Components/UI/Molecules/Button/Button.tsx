import React from 'react';
import { CSSProp } from 'styled-components';

import { IGenerateThemeDesignForComponentProps } from '../../HelperFunctions/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';
import { StyledButton } from './Button.style';

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
// --------------------------------------------------------------------------- //
// --------------- A normal Button with Style from the Theme ----------------- //
// --------------------------------------------------------------------------- //
export default function Button(props: IButton) {
  const { children, wide, themeType, layer, textColor, hoverColor, outlined, externalStyle, ...htmlProps } = {
    ...defaultProps,
    ...props,
  };
  return (
    <StyledButton
      $wide={wide}
      $themeType={themeType}
      $layer={layer}
      $textColor={textColor}
      $hoverColor={hoverColor}
      $outlined={outlined}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledButton>
  );
}

const defaultProps: IButtonProps & IGenerateThemeDesignForComponentProps = {
  themeType: 'accent' as const,
  size: 'md',
  layer: 0,
};

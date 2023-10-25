import React from 'react';
import { CSSProp } from 'styled-components';

import { borderRadius } from '../../Design/design';
import { IGenerateThemeDesignForComponentProps } from '../../HelperFunctions/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';
import { StyledButton } from './Button.style';

export interface IButtonProps {
  size?: 'sm' | 'md' | 'lg';
  wide?: boolean;
  borderRadius?: keyof typeof borderRadius;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  oneToOne?: boolean;
}
// --------------------------------------------------------------------------- //
// --------------- A normal Button with Style from the Theme ----------------- //
// --------------------------------------------------------------------------- //
type IButton = IButtonProps & IGenerateThemeDesignForComponentProps & React.HTMLAttributes<HTMLButtonElement>;
export default function Button(props: IButton) {
  const { children, size, wide, borderRadius, themeType, layer, textColor, hoverColor, outlined, externalStyle, oneToOne, ...htmlProps } = {
    ...defaultProps,
    ...props,
  };
  return (
    <StyledButton
      $size={size}
      $wide={wide}
      $borderRadius={borderRadius}
      $themeType={themeType}
      $layer={layer}
      $textColor={textColor}
      $hoverColor={hoverColor}
      $outlined={outlined}
      $oneToOne={oneToOne}
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

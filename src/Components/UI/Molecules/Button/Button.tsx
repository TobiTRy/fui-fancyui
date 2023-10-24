import React from 'react';

import { borderRadius } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import generateThemeItem, { IGenerateThemeItem } from '../../HelperFunctions/designFunctions/generateItemTheme/generateThemeItem';
import { styled } from 'styled-components';

export interface IButtonProps {
  size?: 'sm' | 'md' | 'lg';
  wide?: boolean;
  borderRadius?: keyof typeof borderRadius;
  align?: 'left' | 'right' | 'center'; // should not needed
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  textColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  hoverColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  outlined?: boolean;
  children?: React.ReactNode;
}

const StyledButton = styled.button<IGenerateThemeItem>`
  ${(props: IGenerateThemeItem) => generateThemeItem(props)}
`;

export default function Button(props: IButtonProps) {
  const { children, size, wide, borderRadius, align, themeType, layer, textColor, hoverColor, outlined } = props;
  return (
    <StyledButton
      $size={size!}
      $wide={wide}
      $borderRadius={borderRadius}
      $align={align}
      $themeType={themeType}
      $layer={layer}
      $textColor={textColor}
      $hoverColor={hoverColor}
      $outlined={outlined}
    >
      {children}
    </StyledButton>
  );
}

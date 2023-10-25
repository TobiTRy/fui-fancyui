import React from 'react';
import { styled } from 'styled-components';

import { borderRadius } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import generateThemeDesignForComponent, {
  IGenerateThemeDesignForComponent,
} from '../../HelperFunctions/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

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

const StyledButton = styled.button<IGenerateThemeDesignForComponent & IStyledPrefixAndPicker<IButtonProps>>`
  ${(props: IGenerateThemeDesignForComponent) =>
    generateThemeDesignForComponent({ ...props, $backgroundState: 'hover', $hoverColor: 'accent' })}
`;

export default function Button(props: IButtonProps) {
  const { children, size, wide, borderRadius, align, themeType, layer, textColor, hoverColor, outlined } = { ...defaultProps, ...props };
  return (
    <StyledButton
      $size={size}
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

const defaultProps: IButtonProps = {
  themeType: 'accent',
  size: 'md',
  layer: 0,
};

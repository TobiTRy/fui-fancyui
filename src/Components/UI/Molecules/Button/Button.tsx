import React from 'react';
import { CSSProp, styled } from 'styled-components';

import { borderRadius } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import generateThemeDesignForComponent, {
  IGenerateThemeDesignForComponent,
  IGenerateThemeDesignForComponentProps,
} from '../../HelperFunctions/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { generatePadding } from '../../HelperFunctions/designFunctions/generatePaddingForComponent/generatePadding';
import { generateComponentPadding } from '../../HelperFunctions/designFunctions/generatePaddingForComponent/generatepaddingForComponent';
import { generateBorderRadiusForComponent } from '../../HelperFunctions/designFunctions/generateBorderRadiusForComponent/generateBorderRadiusForComponent';

export interface IButtonProps {
  size?: 'sm' | 'md' | 'lg';
  wide?: boolean;
  borderRadius?: keyof typeof borderRadius;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
}

const StyledButton = styled.button<IGenerateThemeDesignForComponent & IStyledPrefixAndPicker<IButtonProps>>`
  display: inline-flex;
  height: fit-content;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  min-width: fit-content;
  transition: background-color 0.125s ease-in-out;

  ${({ $size, $borderRadius }) => generateBorderRadiusForComponent($size, $borderRadius)};

  ${(props: IGenerateThemeDesignForComponent) => generateThemeDesignForComponent({ ...props, $backgroundState: 'hover' })};
  ${({ $size, $outlined }) =>
    generateComponentPadding({ size: $size ?? 'md', borderThinkness: $outlined ? 1.2 : 0, doublePaddingLeftRight: true })}
  ${({ $externalStyle }) => $externalStyle && $externalStyle}
  &:disabled {
    ${disabledStyle}
  }
`;

export default function Button(props: IButtonProps & IGenerateThemeDesignForComponentProps) {
  const { children, size, wide, borderRadius, themeType, layer, textColor, hoverColor, outlined, externalStyle } = {
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
      $externalStyle={externalStyle}
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

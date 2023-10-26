import { css, styled } from 'styled-components';
import { IGenerateThemeDesignForComponent } from '../../HelperFunctions/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';
import { generateComponentPadding } from '../../HelperFunctions/designFunctions/generatePaddingForComponent/generatepaddingForComponent';
import { generateBorderRadiusForComponent } from '../../HelperFunctions/designFunctions/generateBorderRadiusForComponent/generateBorderRadiusForComponent';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { IButtonProps } from './Button';
import generateThemeDesignForComponent from '../../HelperFunctions/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';

const generate1To1Button = ($size: 'sm' | 'md' | 'lg', $outlined?: boolean) => {
  //this makes the button a square (1/1) if there is no $label and a $icon
  const padding = generateComponentPadding({ size: $size ?? 'md', borderThinkness: $outlined ? 1.2 : 0 });

  return css`
    aspect-ratio: 1/1;
    justify-content: center;
    ${padding}
  `;
};

export const StyledButton = styled.button<IGenerateThemeDesignForComponent & IStyledPrefixAndPicker<IButtonProps>>`
  display: inline-flex;
  height: fit-content;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  min-width: fit-content;
  transition: background-color 0.125s ease-in-out;

  ${({ $size, $borderRadius }) => generateBorderRadiusForComponent($size, $borderRadius)};

  ${(props: IGenerateThemeDesignForComponent) => generateThemeDesignForComponent({ ...props, $backgroundState: 'hover' })};
  ${({ $size, $outlined }) =>
    generateComponentPadding({ size: $size ?? 'md', borderThinkness: $outlined ? 1.2 : 0, doublePaddingLeftRight: true })}
  ${({ $externalStyle }) => $externalStyle && $externalStyle}

  ${({ $size, $outlined, $oneToOne }) => $oneToOne && generate1To1Button($size ?? 'md', $outlined)};
  
  &:disabled {
    ${disabledStyle}
  }
`;

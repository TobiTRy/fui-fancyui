import { styled, css } from 'styled-components';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { spacingPx, fontSize } from '../../Design/designSizes';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';

export const StyledInputWrapper = styled.div<{ disabled?: boolean; $autoWidth?: boolean }>`
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  width: ${({ $autoWidth }) => ($autoWidth ? 'auto' : '100%')};

  ${({ disabled }) => (disabled ? disabledStyle : '')};
`;

//the style for the error message
export const ErrorMessage = styled.p<{theme: TUiColorsType}>`
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-top: ${spacingPx.xxs};
  font-size: ${fontSize.extrasm};
  color: ${({theme}) => theme.colors.error[0]};
`;

//the input/label/underline are all wrapped in thid container
export const InputContainer = styled.div<{ $givePadding: boolean, theme: TUiColorsType ,$themeType: keyof TUiColorsType, $layer: TLayer }>`
  width: 100%;
  grid-column: 2/3;
  ${({ $givePadding }) =>
    $givePadding &&
    css`
      padding-top: ${parseFloat(spacingPx.lg) + 2 + 'px'};
    `};
  position: relative;

  input {
    padding: 0px 0px ${parseFloat(spacingPx.xs) + 2 + 'px'};
  }
  
  svg {
    color: ${({ theme, $themeType, $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  }
`;

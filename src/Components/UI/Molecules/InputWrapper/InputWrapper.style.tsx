import { styled, css } from 'styled-components';

import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { fontSize } from '../../Design/designSizes';
import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TTheme } from '@/Components/UI/Interface/TTheme';

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
export const ErrorMessage = styled.p<{theme: TTheme}>`
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-top: ${({theme}) => theme.spacing.xxs};
  font-size: ${fontSize.extrasm};
  color: ${({theme}) => theme.colors.error[0]};
`;

//the input/label/underline are all wrapped in thid container
export const InputContainer = styled.div<{ $givePadding: boolean, theme: TTheme ,$themeType: TUiColors, $layer: TLayer }>`
  width: 100%;
  grid-column: 2/3;
  ${({ $givePadding, theme }) =>
    $givePadding &&
    css`
      padding-top: ${parseFloat(theme.spacing.lg) + 2 + 'px'};
    `};
  position: relative;

  input {
    padding: 0px 0px ${({theme}) => parseFloat(theme.spacing.xs) + 2 + 'px'};
  }
  
  svg {
    color: ${({ theme, $themeType, $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  }
`;

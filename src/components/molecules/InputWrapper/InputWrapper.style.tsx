import { styled, css } from 'styled-components';

import { disabledStyle } from '@/design/designFunctions/disabledStyle';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

import { TThemeTypes } from '@/types/TThemeTypes';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';

export const StyledInputWrapper = styled.div<{ disabled?: boolean; $autoWidth?: boolean }>`

  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  width: ${({ $autoWidth }) => ($autoWidth ? 'auto' : '100%')};

  ${({ disabled }) => (disabled ? disabledStyle : '')};
`;

//the style for the error message
export const SystemMessageWrapper = styled.div<{ theme: TTheme }>`
  grid-column: 2;
  grid-row: 2;
`;

//the input/label/underline are all wrapped in thid container
export const InputContainer = styled.div<{
  $givePadding: boolean;
  theme: TTheme;
  $themeType: TThemeTypes;
  $layer: TLayer;
}>`
  width: 100%;
  grid-column: 2/3;
  ${({ $givePadding, theme }) =>
    $givePadding &&
    css`
      padding-top: ${theme.spacing.lg};
    `};

  position: relative;

  input {
    height: 16px;
    font-size: 16px;
    padding: 6px 2px 10px;
  }

  svg {
    color: ${({ theme, $themeType, $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  }
`;

// Define the styles for the icon

// eslint-disable-next-line react-refresh/only-export-components
export const iconStyle = css<{ theme: TTheme }>`
  margin-right: ${({ theme }) => parseFloat(theme.spacing.xs) + 2 + 'px'};
  margin-bottom: 2px;
  transition: 0.5s;
  align-self: flex-end;
`;

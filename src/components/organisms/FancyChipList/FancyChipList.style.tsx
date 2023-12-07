import { styled } from 'styled-components';

import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';
import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';

import { TTheme } from '@/interface/TTheme';
import { IGenerateThemeForCardProps } from '@/design/designFunctions/generateThemeForCard';

type IChipContainer = IStyledPrefixAndPicker<IGenerateThemeForCardProps> & { theme: TTheme };
export const InputLi = styled.li<IChipContainer>`
  display: flex;
  flex: 1;

  input {
    border: none;
    padding: 5px;
    font-size: 14px;
    background-color: transparent;
    color: ${({ $themeType, theme }) =>
      getTextColor({ $themeType: $themeType ?? 'primary', theme, turnColorTheme: true })};

    &:focus {
      outline: none;
      width: 1ch;
    }
  }
`;

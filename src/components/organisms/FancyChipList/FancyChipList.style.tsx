import { styled } from 'styled-components';

import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';
import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';

import { TTheme } from '@/interface/TTheme';
import { IGenerateThemeForCardProps } from '@/design/designFunctions/generateThemeForCard';

type IChipContainer = IStyledPrefixAndPicker<IGenerateThemeForCardProps> & { theme: TTheme };
export const InputLi = styled.li<IChipContainer>`
  display: flex;
  flex: 1 0 auto;
  min-width: 40px;

  input {
    flex-grow: 1;
    height: auto;
    width: 100%;
    border: none;
    font-size: 14px;
    background-color: transparent;
    color: ${({ $themeType, theme }) =>
      getTextColor({ $themeType: $themeType ?? 'primary', theme, turnColorTheme: true })};

    &:focus {
      outline: none;
    }
  }
`;

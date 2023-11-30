import { styled } from 'styled-components';

import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { getTextColor } from '../../design/color/colorCalculatorForComponent/colorCalculatorForComponet';
import { IgenerateThemeForCard } from '../../design/designFunctions/generateThemeForCard/generateThemeForCard';
import { TTheme } from '@/Components/Interface/TTheme';

type IChipContainer = IStyledPrefixAndPicker<IgenerateThemeForCard> & { theme: TTheme };
export const InputLi = styled.li<IChipContainer>`
  display: flex;
  flex: 1;

  input {
    border: none;
    padding: 5px;
    font-size: 14px;
    background-color: transparent;
    color: ${({ $themeType, theme }) => getTextColor({ $themeType: $themeType ?? 'primary', theme, turnColorTheme: true })};

    &:focus {
      outline: none;
      width: 1ch;
    }
  }
`;

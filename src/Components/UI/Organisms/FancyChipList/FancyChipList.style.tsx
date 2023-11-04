import { styled } from 'styled-components';

import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { TUiColorsType } from '../../Design/color/designColor';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';
import { IgenerateThemeForCard } from '../../HelperFunctions/designFunctions/generateThemeForCard/generateThemeForCard';
import { spacingPx } from '../../Design/design';

type IChipContainer = IStyledPrefixAndPicker<IgenerateThemeForCard> & { theme: TUiColorsType };
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
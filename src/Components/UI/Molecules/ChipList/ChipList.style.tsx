import { styled } from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';
import { getBackgroundColor, getTextColor } from '../../Design/color/colorCalculatorForComponet';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { ChipListProps } from './ChipList';
import { spacingPx } from '../../Design/design';
import generateThemeForCard, {
  IgenerateThemeForCard,
} from '../../HelperFunctions/designFunctions/generateThemeForCard/generateThemeForCard';

type IChipContainer = IStyledPrefixAndPicker<IgenerateThemeForCard> & { theme: TUiColorsType };
export const ChipContainer = styled.ul<IChipContainer>`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  border-radius: 5px;
  gap: ${spacingPx.sm};
  list-style-type: none;
  margin: 0;
  ${({ $layer, $themeType, theme, $outlined }) =>
    generateThemeForCard({ $layer: $layer ?? 2, $themeType: $themeType ?? 'primary', theme, $outlined })}
`;

export const ChipInput = styled.input<IChipContainer>`
  flex: 1;
  border: none;
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  background-color: transparent;
  color: ${({ $themeType, theme }) => getTextColor({ $themeType: $themeType ?? 'primary', theme, turnColorTheme: true })};
  &:focus {
    outline: none;
  }
`;

export const InputLi = styled.li<IChipContainer>`
  display: flex;
  flex: 1;

  input {
    flex: 1;
    border: none;
    margin: 5px;
    padding: 5px;
    font-size: 14px;
    background-color: transparent;
    color: ${({ $themeType, theme }) => getTextColor({ $themeType: $themeType ?? 'primary', theme, turnColorTheme: true })};
    &:focus {
      outline: none;
    }
  }
`;

export const LimitText = styled.div`
  padding-top: ${spacingPx.xxs};
  text-align: right;
`
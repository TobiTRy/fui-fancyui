import { styled } from "styled-components";
import { TUiColorsType } from "../../Design/color/designColor";
import { getBackgroundColor, getTextColor } from "../../Design/color/colorCalculatorForComponet";
import IStyledPrefixAndPicker from "../../Interface/IStyledPrefixAndPicker.model";
import { ChipListProps } from "./ChipList";


type IChipContainer = IStyledPrefixAndPicker<ChipListProps, 'themeType'> & {theme: TUiColorsType}
export const ChipContainer = styled.ul<IChipContainer>`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({$themeType, theme}) => getBackgroundColor({$themeType: $themeType ?? 'primary', theme, $layer: 3})};
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style-type: none; // Removes default list styling
  margin: 0; // Removes default margin
`;

export const Chip = styled.li`
  padding: 5px 10px;
  margin: 5px;
  background-color: #007bff;
  color: white;
  border-radius: 15px;
  font-size: 14px;
`;

export const ChipInput = styled.input<IChipContainer>`
  flex: 1;
  border: none;
  margin: 5px;
  padding: 5px;
  font-size: 14px;
  background-color: transparent;
  color: ${({$themeType, theme}) => getTextColor({$themeType: $themeType ?? 'primary', theme, turnColorTheme: true})};
  &:focus {
    outline: none;
  }
`;

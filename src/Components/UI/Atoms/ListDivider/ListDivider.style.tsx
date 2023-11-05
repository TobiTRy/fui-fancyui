import { css, styled } from 'styled-components';

import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TUiColorsType } from '../../Design/color/designColor';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { IListDivider } from './ListDivider.model';

// only a sepeation line
type TStyledPrefixAndOmitter = IStyledPrefixAndPicker<IListDivider, 'themeType' | 'layer'> & { theme: TUiColorsType };
export const StyledI = styled.div<TStyledPrefixAndOmitter>`
  height: 1px;
  background-color: ${({ theme, $themeType, $layer }) =>
    getBackgroundColor({ theme, $themeType: $themeType ?? 'secondary', $layer: $layer ?? 2 })};
  margin: 8px 0;
`;


// the wrapper for the text and the line
type TStyledTextDiv = IStyledPrefixAndPicker<IListDivider, 'themeType' | 'layer' | 'textAlignment'> & { theme: TUiColorsType };
export const StyledTextDiv = styled.div<TStyledTextDiv>`
  display: flex;
  color: ${({ $themeType, $layer, theme }) => getBackgroundColor({ $themeType: $themeType ?? 'secondary', $layer, theme })};
  justify-content: center;
  align-items: center;
  line-height: 0;

  > span {
    padding: 0 12px;
    flex-shrink: 0;
  }
  /* This aligns the left line  */
  ${({ $textAlignment, $themeType, $layer, theme }) =>
    ($textAlignment === 'right' || $textAlignment === 'center') &&
    css`
      &:before {
        content: ' ';
        width: 100%;
        height: 1px;
        background-color: ${getBackgroundColor({ $themeType: $themeType ?? 'secondary', $layer, theme })};
      }
    `}

  /* This aligns the right line  */
  ${({ $textAlignment, $themeType, $layer, theme }) =>
    ($textAlignment === 'left' || $textAlignment === 'center') &&
    css`
      &:after {
        content: ' ';
        width: 100%;
        height: 1px;
        background-color: ${getBackgroundColor({ $themeType: $themeType ?? 'secondary', $layer, theme })};
      }
    `}
`;

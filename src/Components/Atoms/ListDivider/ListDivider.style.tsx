import { css, styled } from 'styled-components';

import { getBackgroundColor } from '../../design/color/colorCalculatorForComponent/colorCalculatorForComponet';
import IStyledPrefixAndPicker from '../../../interface/IStyledPrefixAndPicker.model';
import { IListDivider } from './ListDivider.model';
import { TTheme } from '@/interface/TTheme';

// only a sepeation line
type TStyledPrefixAndOmitter = IStyledPrefixAndPicker<IListDivider, 'themeType' | 'layer'> & { theme: TTheme };
export const StyledI = styled.div<TStyledPrefixAndOmitter>`
  height: 1px;
  background-color: ${({ theme, $themeType, $layer }) =>
    getBackgroundColor({ theme, $themeType: $themeType ?? 'secondary', $layer: $layer ?? 2 })};
  margin: 8px 0;
`;

// the wrapper for the text and the line
type TStyledTextDiv = IStyledPrefixAndPicker<IListDivider, 'themeType' | 'layer' | 'textAlignment' | 'noLine'> & { theme: TTheme };
export const StyledTextDiv = styled.div<TStyledTextDiv>`
  display: flex;
  color: ${({ $themeType, $layer, theme }) => getBackgroundColor({ $themeType: $themeType ?? 'secondary', $layer, theme })};

  justify-content: ${({ $textAlignment }) =>
    $textAlignment === 'left' ? 'flex-start' : $textAlignment === 'right' ? 'flex-end' : 'center'};
  align-items: center;
  margin: 2px 0;

  > span {
    padding: ${({ $textAlignment }) => {
      switch ($textAlignment) {
        case 'left':
          return '0 8px 0 20px';
        case 'right':
          return '0 20px 0 8px';
        case 'center':
          return '0 8px 0 8px';
      }
    }};
    flex-shrink: 0;
  }

  /* This aligns the left line  */
  ${({ $textAlignment, $themeType, $layer, theme, $noLine }) =>
    !$noLine &&
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
  ${({ $textAlignment, $themeType, $layer, theme, $noLine }) =>
    !$noLine &&
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

import { css, styled } from 'styled-components';

import generateThemeDesignForComponent from '../../design/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';
import IStyledPrefixAndOmitter from '../../../interface/IStyledPrefixAndOmiter.model';
import { IStyledChip } from './Chip';
import { TTheme } from '@/interface/TTheme';

const sizes = {
  sm: {
    height: '24px',
  },
  md: {
    height: '32px',
  },
  lg: {
    height: '38px',
  },
};

// Define the styled component for the chip
type TChipSize = IStyledPrefixAndOmitter<IStyledChip, 'children' | 'onClick'>;
export const StyledChip = styled.div<TChipSize & { theme: TTheme }>`
  border: none;
  height: ${({ $size }) => ($size ? sizes[$size].height : sizes.md.height)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2;
  width: fit-content;
  border-radius: ${({ theme }) => theme.borderRadius.xxxl};
  ${({ $outlined, $themeType = 'primary', $textColor = 'secondary', theme, $layer }) =>
    generateThemeDesignForComponent({ theme, $themeType, $layer: $layer ?? 3, $outlined, $textColor, $useSimpleTextColor: true })};

  ${({ $isActive, theme }) => {
    if ($isActive) {
      return css`
        box-shadow: 0 0 0 1px ${theme.colors.accent[0]};
      `;
    }
  }}

  ${({ $externalStyle }) => $externalStyle}
`;

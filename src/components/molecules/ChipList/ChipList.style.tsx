import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { FancyBox } from '@/components/atoms/FancyBox';
import { generateSystemIndicatorStyle } from '@/design/designFunctions/generateSystemIndicatorStyle';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export const ChipContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledChipList = styled(FancyBox)<{ theme?: TTheme; $sytemMessage?: TUiColorsSystemMessage }>`
  ul {
    gap: ${({ theme }) => theme.spacing.sm};
  }
  ${({ $sytemMessage }) => generateSystemIndicatorStyle($sytemMessage)};
`;

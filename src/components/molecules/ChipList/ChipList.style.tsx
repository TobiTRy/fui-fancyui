import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { FancyBox } from '@/components/atoms/FancyBox';
import { generateSystemIndicatorStyle } from '@/design/designFunctions/generateSystemIndicatorStyle';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { globalElementSizes } from '@/design/theme/globalSizes';

export const ChipContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledChipList = styled(FancyBox)<{ theme?: TTheme; $sytemMessage?: TUiColorsSystemMessage }>`
  ul {
    min-height: ${globalElementSizes.xs};
    gap: ${({ theme }) => theme.spacing.sm};
  }
  ${({ $sytemMessage }) => generateSystemIndicatorStyle($sytemMessage)};
`;

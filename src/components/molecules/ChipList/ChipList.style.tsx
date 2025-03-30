import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { FancyBox } from '@/components/atoms/FancyBox';
import { generateSystemIndicatorStyle } from '@/design/designFunctions/generateSystemIndicatorStyle';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { globalElementSizes } from '@/design/theme/globalSizes';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';

export const ChipContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

type TStyledChipList = {
  theme?: TTheme;
  $sytemMessage?: TUiColorsSystemMessage;
  $disabled?: boolean;
};

export const StyledChipList = styled(FancyBox)<TStyledChipList>`
  ul {
    min-height: ${globalElementSizes.xs};
    gap: ${({ theme }) => theme.spacing.sm};
  }

  ${({ $sytemMessage }) => generateSystemIndicatorStyle($sytemMessage)};

  ${({ $disabled }) => $disabled && disabledStyle};
`;

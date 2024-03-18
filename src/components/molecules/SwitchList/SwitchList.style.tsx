import { css } from 'styled-components';

import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';
import { TTheme } from '@/types/TTheme';

export const ListItemStyle = css<{ theme: TTheme; active: boolean }>`
  position: relative;
  flex-grow: 1;
  color: ${({ theme, active }) => (active ? theme.colors.accent[0] : theme.colors.secondary[0])};
  ${simpleColorTransition}

  &:hover {
    color: ${({ theme }) => theme.colors.accent[0]};
  }
`;

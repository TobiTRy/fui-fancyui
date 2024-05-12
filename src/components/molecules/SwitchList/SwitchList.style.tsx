import { css } from 'styled-components';

import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';
import { TTheme } from '@/types/TTheme';

export const ListItemStyle = css<{ theme: TTheme; active: boolean }>`
  position: relative;
  flex-grow: 1;
  color: ${({ theme, active }) => (active ? theme.color.accent[0] : theme.color.secondary[0])};
  ${simpleColorTransition}

  &:hover {
    color: ${({ theme }) => theme.color.accent[0]};
  }
`;

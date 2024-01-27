import { css } from 'styled-components';

import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';
import { themeStore } from '@/design/theme/themeStore';
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

export interface IgenerateListItemStyle {
  isActive: boolean;
  activeStyle?: boolean;
  hoverStyle?: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const generateListItemStyle = (props: IgenerateListItemStyle) => {
  const { isActive, hoverStyle } = props;
  const theme = themeStore.getState().theme;

  return css`
    position: relative;
    flex-grow: 1;
    height: 100%;
    color: ${isActive !== undefined && (isActive ? theme.colors.accent[0] : theme.colors.secondary[0])};
    ${hoverStyle &&
    css`
      & > *:not(.switch-indicator) {
        ${simpleColorTransition}
      }

      & > *:hover {
        ${simpleColorTransition}
        color: ${theme.colors.accent[0]};
      }
    `}
  `;
};

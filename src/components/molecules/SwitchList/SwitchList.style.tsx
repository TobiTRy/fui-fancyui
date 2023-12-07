import { styled, CSSProp, css } from 'styled-components';

import { RawUL } from '@/components/atoms/RawUL';
import { TTheme } from '@/interface/TTheme';
import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';
import { themeStore } from '@/design/theme/themeStore';

//TODO: Remove this later
export const StyledList = styled(RawUL)<{ $externalStyle?: CSSProp; $direction?: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction === 'vertical' ? 'column' : 'row')};
  justify-content: space-evenly;
  width: 100%;
  ${({ $externalStyle }) => $externalStyle};
`;

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
export const generateListItemStyle = (props: IgenerateListItemStyle) => {
  const { isActive, hoverStyle } = props;
  const theme = themeStore.getState().theme;

  return css`
    position: relative;
    flex-grow: 1;
    height: 100%;
    color: ${isActive !== undefined && (isActive ? theme.colors.accent[0] : theme.colors.secondary[0])};
    ${simpleColorTransition}
    ${hoverStyle &&
    css`
      &:hover {
        color: ${theme.colors.accent[0]};
      }
    `}
  `;
};

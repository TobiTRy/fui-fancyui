import { CSSProp, styled } from 'styled-components';

import { borderRadius, spacingPx } from '@/design/theme/designSizes';
import { themeStore } from '@/design/theme/themeStore';

import { TTheme } from '@/interface/TTheme';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import { TSpacings } from '@/interface/TSpacings';

// Define the different sizes for the tab switch
const getSpacingFromTheme = themeStore.getState().theme.spacing;

export const tabSwitchSizes = {
  sm: {
    paddingComponent: '0',
  },
  md: {
    paddingComponent: getSpacingFromTheme.xxs,
  },
  lg: {
    paddingComponent: getSpacingFromTheme.xxs,
  },
};

// Define the interface for the styled-component
export interface IFancyTabSwitchStyle {
  $wide?: boolean;
  $tabSpacing?: TSpacings;
  $direction?: 'horizontal' | 'vertical';
  $rounded?: TBorderRadiusSizes;
}

// ----------------------------------------------------------- //
// ---------- The main UL element for the component ---------- //
// ----------------------------------------------------------- //
// Define the styled-component for the unordered list of the tab switch
export const ULButtonSwitchList = styled.ul<IFancyTabSwitchStyle & { theme: TTheme }>`
  display: ${({ $wide }) => ($wide ? 'grid' : 'inline-grid')};
  grid-auto-flow: ${({ $direction }) => ($direction === 'vertical' ? 'row' : 'column')};
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: ${({ $tabSpacing }) => ($tabSpacing ? spacingPx[$tabSpacing] : '0')};
  border-radius: ${({ $rounded }) => ($rounded ? borderRadius[$rounded] : '0')};
  ${({ $wide }) => $wide && `justify-content: space-between`};
  align-items: center;
  margin: 0;
  padding: 0;
  & > * {
    /* Selects all direct children of the parent */
    min-width: 0;
  }
`;

// ----------------------------------- //
// ---------- Other styled  ---------- //
// ----------------------------------- //
// Define the styled-component for the list item wrapper
export const ItemWrapper = styled.li<{ $externalStyle?: CSSProp }>`
  position: relative;
  height: 100%;
  width: 100%;
  list-style: none;
  ${({ $externalStyle }) => $externalStyle}
`;

import { styled } from 'styled-components';

import { borderRadius, spacingPx } from '../../Design/designSizes';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { TTheme } from '@/Components/UI/Interface/TTheme';
import { TBorderRadiusSizes } from '@/Components/UI/Interface/TBorderRadius';
import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TSpacings } from '../../Interface/TSpacings';
import themeStore from '../../Design/color/themeStore';

// Define the different sizes for the tab switch
const getSpacingFromTheme = themeStore.getState().theme.spacing;
export const tabSwitchSizes = {
  sm: {
    paddingComponent: '4px',
  },
  md: {
    paddingComponent: getSpacingFromTheme.xs,
  },
  lg: {
    paddingComponent: getSpacingFromTheme.sm,
  },
};

// Define the interface for the styled-component
export interface IFancyTabSwitchStyle {
  $transparent?: boolean;
  $wide?: boolean;
  $outlinedBackgroundStrength?: number;
  $tabSpacing?: TSpacings;
  $direction?: 'horizontal' | 'vertical';
  $rounded?: TBorderRadiusSizes;
  $padding?: keyof typeof tabSwitchSizes;
  $outlined?: boolean;
  theme: TTheme;
  $layer?: TLayer;
  $themeType?: TUiColors;
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
export const ItemWrapper = styled.li`
  position: relative;
  height: 100%;
  width: 100%;
  list-style: none;
`;

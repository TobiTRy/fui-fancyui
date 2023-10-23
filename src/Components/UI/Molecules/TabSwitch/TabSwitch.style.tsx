import { styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { tabSwitchSizes } from './TabSwitch';
import { TLayer } from '../../Design/color/generateColorSteps';

// Define the interface for the styled-component
export interface IFancyTabSwitchStyle {
  $transparent?: boolean;
  $wide?: boolean;
  $outlinedBackgroundStrength?: number;
  $tabSpacing?: keyof typeof spacingPx;
  $direction?: 'horizontal' | 'vertical';
  $rounded?: keyof typeof borderRadius;
  $padding?: keyof typeof tabSwitchSizes;
  $outlined?: boolean;
  theme: TUiColorsType;
  $layer?: TLayer;
  $themeType?: keyof TUiColorsType;
}

// ----------------------------------------------------------- //
// ---------- The main UL element for the component ---------- //
// ----------------------------------------------------------- //
// Define the styled-component for the unordered list of the tab switch
export const ULButtonSwitchList = styled.ul<IFancyTabSwitchStyle & { theme: TUiColorsType }>`
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

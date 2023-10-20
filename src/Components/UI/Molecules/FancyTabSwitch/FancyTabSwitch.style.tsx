import { styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { tabSwitchSizes } from './FancyTabSwitch';
import generateColorDesign from './helperFunctions/generateColorDesign';
import { TLayer } from '../../Design/color/generateColorSteps';

// Define the interface for the styled-component
export interface IFancyTabSwitchStyle {
  $transparent?: boolean;
  $wide?: boolean;
  $outlined?: boolean;
  $outlinedBackgroundStrength?: number;
  $rounded?: keyof typeof borderRadius;
  $tabSpacing?: keyof typeof spacingPx;
  theme: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  $padding?: keyof typeof tabSwitchSizes;
  $direction?: 'horizontal' | 'vertical';
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

  // Generate the color design for the tab switch
  ${({ $themeType, theme, $outlined, $padding, $rounded, $layer }) =>
    generateColorDesign({ $themeType, theme, $outlined, $padding, $rounded, $layer })}

  // Generate the disabled style for the tab switch
`;

// ----------------------------------- //
// ---------- Other styled  ---------- //
// ----------------------------------- //
// Define the styled-component for the list item wrapper
export const ItemWrapper = styled.li`
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1 0;
  list-style: none;
`;


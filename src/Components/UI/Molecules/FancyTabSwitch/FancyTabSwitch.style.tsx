import { styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { TUiColorsType } from '../../Design/color/designColor';
import { tabSwitchSizes } from './FancyTabSwitch';
import generateColorDesign from './helperFunctions/generateColorDesign';

// Define the interface for the styled-component
export interface IFancyTabSwitchStyle {
  $transparent?: boolean;
  $rounded?: keyof typeof borderRadius;
  $wide?: boolean;
  $tabSpacing?: keyof typeof spacingPx;
  $disabled?: boolean;
  theme: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $padding?: keyof typeof tabSwitchSizes;
  $outlined?: boolean;
  $direction?: 'horizontal' | 'vertical';
}

// ----------------------------------------------------------- //
// ---------- The main UL element for the component ---------- //
// ----------------------------------------------------------- //
// Define the styled-component for the unordered list of the tab switch
export const ULButtonSwitchList = styled.ul<IFancyTabSwitchStyle & { theme: TUiColorsType }>`
  display: grid;
  grid-auto-flow: ${({ $direction }) => ($direction === 'vertical' ? 'row' : 'column')};
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: ${({ $tabSpacing }) => ($tabSpacing ? spacingPx[$tabSpacing] : '0')};
  border-radius: ${({ $rounded }) => ($rounded ? borderRadius[$rounded] : '0')};
  ${({ $wide }) => $wide && `justify-content: space-between`};
  align-items: center;
  margin: 0;
  
  // Generate the color design for the tab switch
  ${({ $themeType, $tabSpacing, theme, $outlined, $padding, $rounded }) =>
    generateColorDesign({ $themeType, $tabSpacing, theme, $outlined, $padding, $rounded })}

// Generate the disabled style for the tab switch
${({ $disabled }) => $disabled && disabledStyle}
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

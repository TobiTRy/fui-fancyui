import { styled } from 'styled-components';

import { borderRadius, spacingPx } from '../../design/theme/designSizes';
import { TThemeTypes } from '@/Components/Interface/TUiColors';
import { tabSwitchSizes } from '../TabSwitch/TabSwitch.style';
import { TLayer } from '@/Components/Interface/TLayer';
import { TTheme } from '@/Components/Interface/TTheme';
import { TBorderRadiusSizes } from '@/Components/Interface/TBorderRadius';
import { TSpacings } from '../../Interface/TSpacings';

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
  $themeType?: TThemeTypes;
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

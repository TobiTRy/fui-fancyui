import { css, styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { TUiColorsType } from '../../Design/color/designColor';
import { tabSwitchSizes } from './FancyTabSwitch';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';

const generateTransparentStyle = (props: TGenerateOutlineStyle) => {
  const { $padding, $themeType, theme, $rounded } = props;

  const getPaddings = $padding ? parseInt(tabSwitchSizes[$padding].paddingComponent) : 0;
  const calcPadding = getPaddings - 1.5 + 'px ' + getPaddings + 12 + 'px ';

  return css`
    overflow: hidden;
    border: 1.5px solid ${getBackgroundColor({ theme, $themeType: 'primary', $layer: 1 })};

    ${$rounded &&
    css`
      padding: ${calcPadding};
    `}
  `;
};

type TGenerateOutlineStyle = Pick<IFancyTabSwitchStyle, '$outlined' | '$padding' | '$themeType' | '$rounded' | 'theme'>;
// Define the function to generate the outline style for the tab switch
const generateOutlineStyle = (props: TGenerateOutlineStyle) => {
  const { $padding, $themeType, theme, $rounded } = props;

  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 3 });
  if ($themeType === 'transparent') return generateTransparentStyle({ $padding, $themeType, theme, $rounded });

  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 1 }),
    0.5
  );

  return css`
    box-sizing: border-box;
    background-color: ${generateSlightBackgroundColor};
    border: 1.5px solid ${backgroundColor};
    padding: ${$padding ? parseInt(tabSwitchSizes[$padding].paddingComponent) - 1.5 + 'px' : '0'};
  `;
};

// Define the function to generate the color design for the tab switch
type TGenerateColorDesign = Pick<IFancyTabSwitchStyle, '$themeType' | '$tabSpacing' | 'theme' | '$outlined' | '$padding' | '$rounded'>;
const generateColorDesign = (props: TGenerateColorDesign) => {
  const { $themeType, theme, $outlined, $padding, $rounded } = props;

  let outlinedStyle;
  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 3 });

  if ($outlined) outlinedStyle = generateOutlineStyle({ $outlined, $padding, $themeType, theme, $rounded });

  return css`
    padding: ${$padding ? tabSwitchSizes[$padding].paddingComponent : '0'};
    background-color: ${$themeType !== 'transparent' && backgroundColor};
    ${outlinedStyle}
  `;
};

// Define the interface for the styled-component
interface IFancyTabSwitchStyle {
  $transparent?: boolean;
  $rounded?: keyof typeof borderRadius;
  $wide?: boolean;
  $tabSpacing?: keyof typeof spacingPx;
  $disabled?: boolean;
  theme: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $padding?: keyof typeof tabSwitchSizes;
  $outlined?: boolean;
}

// Define the styled-component for the unordered list of the tab switch
export const ULButtonSwitchList = styled.ul<IFancyTabSwitchStyle & { theme: TUiColorsType }>`
  display: flex;
  gap: ${({ $tabSpacing }) => ($tabSpacing ? spacingPx[$tabSpacing] : '0')};
  ${({ $wide }) => $wide && `justify-content: space-around`};
  border-radius: ${({ $rounded }) => ($rounded ? borderRadius[$rounded] : '0')};
  align-items: center;
  margin: 0;

  // Generate the color design for the tab switch
  ${({ $themeType, $tabSpacing, theme, $outlined, $padding, $rounded }) =>
    generateColorDesign({ $themeType, $tabSpacing, theme, $outlined, $padding, $rounded })}

  // Generate the disabled style for the tab switch
  ${({ $disabled }) => $disabled && disabledStyle}
`;

// Define the styled-component for the list item wrapper
export const ItemWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  list-style: none;
`;

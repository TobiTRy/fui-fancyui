import { css, styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { TUiColorsType } from '../../Design/color/designColor';
import { tabSwitchSizes } from './FancyTabSwitch';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';

type TGenerateColorDesign = Pick<IFancyTabSwitchStyle, '$themeType' | '$tabSpacing' | 'theme' | '$outlined' | '$padding'>;
const generateColorDesign = (props: TGenerateColorDesign) => {
  const { $themeType, theme, $outlined, $padding } = props;

  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 3 });

  if ($outlined) {
    const generateSlightBackgroundColor = colorTransparencyCalculator(getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 1 }), 0.5);

    return css`
      box-sizing: border-box;
      background-color: ${generateSlightBackgroundColor};
      border: 1.5px solid ${backgroundColor};
      padding: ${($padding ? (parseInt(tabSwitchSizes[$padding].paddingComponent) - 1.5 + 'px' ) : '0')};
    `;

  }
  return css`
    padding: ${($padding ? tabSwitchSizes[$padding].paddingComponent : '0')};
    background-color: ${backgroundColor};
  `;
};

// ------------------------------------------------------------------ //
// --------- this genreates the UL List with conditions ------------- //
// ------------------------------------------------------------------ //
interface IFancyTabSwitchStyle {
  $transparent?: boolean;
  $rounded?: keyof typeof borderRadius;
  $roundedTabs?: boolean;
  $wide?: boolean;
  $tabSpacing?: keyof typeof spacingPx;
  $disabled?: boolean;
  theme: TUiColorsType;
  $themeType?: keyof TUiColorsType;
  $padding?: keyof typeof tabSwitchSizes;
  $outlined?: boolean;
}
export const ULButtonSwitchList = styled.ul<IFancyTabSwitchStyle & { theme: TUiColorsType }>`
  display: flex;

  gap: ${({ $tabSpacing }) => ($tabSpacing ? spacingPx[$tabSpacing] : '0')};
  ${({ $wide }) => $wide && `justify-content: space-around`};
  border-radius: ${({ $rounded }) => ($rounded ? borderRadius[$rounded] : '0')};
  align-items: center;
  margin: 0;

  //this handles the the backgroundcolor and the edge rounding when the backorund is not transparent
  ${({ $themeType, $tabSpacing, theme, $outlined, $padding }) => generateColorDesign({ $themeType, $tabSpacing, theme, $outlined, $padding })}

  //this hanles the disabled style
  ${({ $disabled }) => $disabled && disabledStyle}
`;

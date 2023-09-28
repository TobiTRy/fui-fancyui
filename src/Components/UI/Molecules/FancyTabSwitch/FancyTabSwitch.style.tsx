import { css, styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/designFunctions/disableStyle';
import { TUiColorsType } from '../../Design/color/designColor';
import { tabSwitchSizes } from './FancyTabSwitch';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';

type TGenerateColorDesign = Pick<IFancyTabSwitchStyle, '$themeType' | '$tabSpacing' | 'theme' | '$outlined'>;
const generateColorDesign = (props: TGenerateColorDesign) => {
  const { $themeType, theme, $outlined } = props;

  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 3 });

  if ($outlined) {
    const generateSlightBackgroundColor = colorTransparencyCalculator(getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: 1 }), 0.5);

    return css`
      background-color: ${generateSlightBackgroundColor};
      border: 1.5px solid ${backgroundColor};
    `;

  }
  return css`
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
  padding: ${({ $padding }) => ($padding ? tabSwitchSizes[$padding].paddingComponent : '0')};
  gap: ${({ $tabSpacing }) => ($tabSpacing ? spacingPx[$tabSpacing] : '0')};
  ${({ $wide }) => $wide && `justify-content: space-around`};
  align-items: center;
  margin: 0;

  //this handles the the backgroundcolor and the edge rounding when the backorund is not transparent
  ${({ $themeType, $tabSpacing, theme, $outlined }) => generateColorDesign({ $themeType, $tabSpacing, theme, $outlined })}

  //this hanles the disabled style
  ${({ $disabled }) => $disabled && disabledStyle}
`;

import { TTheme } from '@/types/TTheme';
import { css } from 'styled-components';
import { TStyledPrefixAndPicker } from '../../../types/TStyledPrefixAndPicker';
import { getBackgroundColor } from '../colorCalculatorForComponent/colorCalculatorForComponent';
import colorTransparencyCalculator from '../colorTransparencyCalculator/colorTransparencyCalculator';
import { TGenerateThemeForCardProps } from './TGenerateThemeForCardProps';
import { themeStore } from '@/design/theme/themeStore';

const generateOutlineStyle = (props: TGenerateColorDesign) => {
  const { $themeType, theme, $layer = 3, $outlinedBackgroundStrength = 0.5, $outlinedRemoveBorder } = props;

  // get theme background color
  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 3 });

  // generate the background color with a transparency of the background color
  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $themeType || 'primary', $layer: Math.max(1, $layer - 3) }),
    $outlinedBackgroundStrength
  );

  return css`
    background-color: ${generateSlightBackgroundColor};

    ${!$outlinedRemoveBorder &&
    css`
      border: 1.5px solid ${backgroundColor};
    `};
  `;
};

// --------------------------------------------------------------------------- //
// -----------  The Main generator function to create a the square  ---------- //
// --------------------------------------------------------------------------- //
type TGenerateColorDesign = TStyledPrefixAndPicker<TGenerateThemeForCardProps> & {
  theme: TTheme;
};
export default function generateThemeForCard(props: TGenerateColorDesign) {
  const { $themeType, theme, $outlined, $layer, $outlinedBackgroundStrength, $outlinedRemoveBorder } = props;
  let outlinedStyle, backgroundColor;
  const getBackgroundStrength = themeStore((state) => state.theme.outlined.backgroundStrength);

  // generate the outlined style if the outlined prop is true else generate only the background color
  if ($outlined) {
    outlinedStyle = generateOutlineStyle({
      $outlined,
      $themeType,
      theme,
      $layer,
      $outlinedBackgroundStrength: $outlinedBackgroundStrength || getBackgroundStrength,
      $outlinedRemoveBorder,
    });
  } else {
    backgroundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 1 });
  }

  // padding: ${$padding && $themeType !== 'transparent' ? tabSwitchSizes[$padding].paddingComponent : '0'};
  return css`
    background-color: ${$themeType !== 'transparent' && backgroundColor};
    ${outlinedStyle}
  `;
}

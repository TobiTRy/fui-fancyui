import { css } from 'styled-components';
import { getBackgroundColor } from '../../../../Design/color/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../../../Design/color/colorTransparencyCalculator';
import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';

type TGenerateOutlinedHoverStyle = Pick<
  IGenerateThemeDesignForComponent,
  '$themeType' | 'theme' | '$layer' | '$backgroundStrength' | '$hoverColor'
>;
// --------------------------------------------------------------------------- //
// ---- this function generates the color for the background ----------------- //
// --------------------------------------------------------------------------- //
const generateHoverColor = (props: TGenerateOutlinedHoverStyle) => {
  const { theme, $layer = 0, $themeType, $backgroundStrength = 1, $hoverColor } = props;

  // generate the background color with a transparency of the background color
  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $hoverColor ?? $themeType ?? 'primary', $layer: Math.max(1, $layer - 3) }),
    $backgroundStrength
  );

  return generateSlightBackgroundColor;
};




type TGenerateStateStyle = Pick<
IGenerateThemeDesignForComponent,
'$themeType' | 'theme' | '$layer' | '$backgroundStrength' | '$hoverColor' | '$backgroundState' | '$outlined'
>;
// --------------------------------------------------------------------------- //
// ---------- this function handles wich style should apply ------------------ //
// --------------------------------------------------------------------------- //
export const generateStateStyle = (props: TGenerateStateStyle) => {
  switch (props.$backgroundState) {
    // when the component has a hover state
    case 'hover': {
      // when the component is outlined styled
      if (props.$outlined) {
        return css`
          &:hover:enabled {
            background-color: ${generateHoverColor(props)};
          }
        `;
      }
      // when the component is normal styled
      return css`
        &:hover:enabled {
          background-color: ${generateHoverColor(props)};
        }
      `;
    }
    // when the component has a active state
    case 'active': {
      return css`
        background-color: ${generateHoverColor(props)};
      `;
    }
  }
};

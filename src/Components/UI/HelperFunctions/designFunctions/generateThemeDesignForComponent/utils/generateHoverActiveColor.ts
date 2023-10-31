import { css } from 'styled-components';
import { getBackgroundColor } from '../../../../Design/color/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../../../Design/color/colorTransparencyCalculator';
import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';
import { TLayer } from '../../../../Design/color/generateColorSteps';

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
  '$themeType' | 'theme' | '$layer' | '$backgroundStrength' | '$hoverColor' | '$backgroundState' | '$outlined' | '$textHover' | '$textColor'
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
      } else if (props.$textHover) {
        return css`
          &:hover:enabled {
            color: ${getBackgroundColor({
              theme: props.theme,
              $themeType: props.$textColor ?? 'secondary',
              $layer: Math.min(props.$layer ? props.$layer + 2 : 2, 10) as TLayer,
            })};
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

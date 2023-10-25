import { css } from 'styled-components';
import { getBackgroundColor } from '../../../../Design/color/colorCalculatorForComponet';
import colorTransparencyCalculator from '../../../../Design/color/colorTransparencyCalculator';
import { IGenerateThemeDesignForComponent } from '../generateThemeDesignForComponent';

type TGenerateOutlinedHoverStyle = Pick<
  IGenerateThemeDesignForComponent,
  '$themeType' | 'theme' | '$layer' | '$backgroundStrength' | '$hoverColor'
>;
const generateHoverColor = (props: TGenerateOutlinedHoverStyle) => {
  const { theme, $layer = 3, $themeType, $backgroundStrength = 1, $hoverColor } = props;

  // generate the background color with a transparency of the background color
  const generateSlightBackgroundColor = colorTransparencyCalculator(
    getBackgroundColor({ theme, $themeType: $hoverColor ?? $themeType ?? 'primary', $layer: Math.max(2, $layer - 3) }),
    $backgroundStrength
  );

  return generateSlightBackgroundColor;
};

export const generateStateStyle = (props: IGenerateThemeDesignForComponent) => {
  switch (props.$backgroundState) {
    case 'hover': {
      if (props.$outlined) {
        return css`
          &:hover:enabled {
            background-color: ${generateHoverColor(props)};
            transition: background-color 0.125s ease-in-out;
          }
        `;
      }
      return css`
        &:hover:enabled {
          background-color: ${generateHoverColor(props)};
          transition: background-color 0.125s ease-in-out;
        }
      `;
    }
    case 'active': {
      return css`
        background-color: ${generateHoverColor(props)};
      `;
    }
  }
};

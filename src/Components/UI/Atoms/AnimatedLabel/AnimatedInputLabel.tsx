import { styled, css } from 'styled-components';

import InputLabel from '../InputLabel/InputLabel';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';

const activeHandler = (align: string, $moveUp?: boolean) => {
  if (align !== 'center') {
    return css`
      bottom: 0;
      left: 0;
      ${$moveUp
        ? css`
            transform: translateY(-20px);
          `
        : ''}
    `;
  } else {
    return css`
      bottom: 0;
      left: 50%;
      text-align: center;
      ${$moveUp
        ? css`
            transform: translateY(-20px) translate(-50%);
          `
        : 'transform: translate(-50%);'};
    `;
  }
};

export interface IAnimatedInputLabel {
  $align?: 'center' | 'left';
  $moveUp?: boolean;
  $colorState?: 'error' | 'active' | 'default';
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  theme?: TUiColorsType;
}
// --------------------------------------------------------------------------- //
// ---------- The input label wich hase some colors and an animation --------- //
// --------------------------------------------------------------------------- //
export const AnimatedInputLabel = styled(InputLabel)<IAnimatedInputLabel & { theme?: TUiColorsType }>`
  position: absolute;
  padding: 12px 0 5px;
  color: ${({ $colorState, theme, $themeType = 'secondary', $layer = 4 }) => {
    switch ($colorState) {
      case 'error':
        return theme.colors.error[0];
      case 'active':
        return theme.colors.accent[0];
      default:
        return getTextColor({ theme, $themeType, $textLayer: $layer });
    }
  }};

  ${({ $align, $moveUp }) => activeHandler($align!, $moveUp)};
`;

export default AnimatedInputLabel;

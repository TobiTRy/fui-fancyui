import { styled, css } from 'styled-components';

import { InputLabel } from '@/components/atoms/InputLabel';
import { IAnimatedInputLabel } from './TAnimatedInputLabel.model';

import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';

// --------------------------------------------------------------------------- //
// ---------- The input label wich hase some colors and an animation --------- //
// --------------------------------------------------------------------------- //

export const AnimatedInputLabel = styled(InputLabel)<IAnimatedInputLabel & { theme?: TTheme }>`
  position: absolute;
  padding: 12px 0 8px;
  color: ${({ $colorState, theme, $themeType = 'secondary', $layer = 4 }) => {
    switch ($colorState) {
      case 'error':
        return theme.colors.error[0];
      case 'active':
        return theme.colors.accent[0];
      case 'success':
        return theme.colors.success[0];
      case 'warning':
        return theme.colors.warning[0];
      case 'info':
        return theme.colors.info[0];
      default:
        return getTextColor({ theme, $themeType, $textLayer: $layer });
    }
  }};

  ${({ $align, $moveUp }) => activeHandler($align!, $moveUp)};
`;

export default AnimatedInputLabel;

// --------------------------------------------------------------------------- //
// ---------------Handle the Animation via function props--------------------- //
// --------------------------------------------------------------------------- //
const activeHandler = (align: string, $moveUp?: boolean) => {
  if (align !== 'center') {
    return css`
      bottom: 0;
      left: 0;
      ${$moveUp
        ? css`
            transform-origin: left bottom;
            transform: translateY(calc(-100% + 12px)) scale(0.8);
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
            transform-origin: center bottom;
            transform: translateY(calc(-100% + 12px)) translateX(-50%) scale(0.8);
          `
        : 'transform: translate(-50%);'};
    `;
  }
};

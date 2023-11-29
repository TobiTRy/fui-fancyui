import { styled, css } from 'styled-components';

import InputLabel from '@/Components/Atoms/InputLabel/InputLabel';
import { IAnimatedInputLabel } from './TAnimatedInputLabel.model';

import { getTextColor } from '@/Components/Design/color/colorCalculatorForComponet';
import { TTheme } from '@/Components/Interface/TTheme';

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

// --------------------------------------------------------------------------- //
// ---------- The input label wich hase some colors and an animation --------- //
// --------------------------------------------------------------------------- //
// eslint-disable-next-line react-refresh/only-export-components
export const AnimatedInputLabel = styled(InputLabel)<IAnimatedInputLabel & { theme?: TTheme }>`
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

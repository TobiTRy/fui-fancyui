import { keyframes, styled } from 'styled-components';

import { colorTransparencyCalculator } from '@/design/designFunctions/colorTransparencyCalculator';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { adjustSystemMessageColor } from '@/utils/functions/adjustSystemMessageColor';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

type ToastMessageProps = 'success' | 'warning' | 'error' | 'info';

interface TimerLineProps {
  $messageType: ToastMessageProps;
  $layer?: TLayer;
  theme: TTheme;
  $time: number;
}

export const Background = styled.div<{ theme: TTheme }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => colorTransparencyCalculator(theme.color.primary['0'], 0.95)};
  z-index: -1;
`;

export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    align-self: flex-start;
    line-height: 1.4;
  }
`;

// animation for timer line
const timerAnimation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

export const TimerLine = styled.div<TimerLineProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: ${({ $messageType, theme, $layer = 2 }) => {
    const color = getBackgroundColor({ $themeType: $messageType, theme, $layer });

    return adjustSystemMessageColor(color);
  }};
  animation: ${() => timerAnimation} ${({ $time }) => $time - 300}ms linear forwards;
`;

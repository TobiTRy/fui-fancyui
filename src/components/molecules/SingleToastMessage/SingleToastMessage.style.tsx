import { styled, keyframes, css } from 'styled-components';

import { boxShadow } from '../../../design/designFunctions/shadows/shadows';
import { TLayer } from '@/types/TLayer';
import { getBackgroundColor } from '../../../design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';
import { colorTransparencyCalculator } from '@/design/designFunctions/colorTransparencyCalculator';
import { themeStore } from '@/design/theme/themeStore';

type ToastMessageProps = 'success' | 'warning' | 'error' | 'info';

interface TToastMessage {
  $messageType: ToastMessageProps;
  $layer?: TLayer;
  theme: TTheme;
}

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

// styles for single toast message
export const Container = styled.div<TToastMessage>`
  z-index: 99;
  overflow: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  color: ${({ $messageType, theme, $layer = 3 }) => getBackgroundColor({ $themeType: $messageType, theme, $layer })};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: ${({ theme }) => theme.spacing.md};

  transform: all 1s;
  ${({ $messageType, theme, $layer = 2 }) => getBackgroundColor({ $themeType: $messageType, theme, $layer })};
  box-sizing: border-box;
  ${boxShadow.md}

  ${({ theme, $messageType = 'error', $layer = 0 }) => {
    const color = getBackgroundColor({ theme, $themeType: $messageType, $layer: $layer });
    const isDarkTheme = themeStore((state) => state.isDarkTheme);

    return css`
      border-width: 1px;
      border-style: solid;
      background: hsla(from ${color} h s l / ${isDarkTheme ? '15%' : '5%'});
      color: ${isDarkTheme
        ? `hsla(from ${color} h s calc(l * 1.4) / 100%)`
        : `hsla(from ${color} h s calc(l * 0.6) / 100%)`};
      border-left: 4px solid;
      border-color: hsla(from ${color} h s calc(l * 1.1) / 100%);
    `;
  }}
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
    const isDarkTheme = themeStore((state) => state.isDarkTheme);

    return ` hsla(from ${color} h s calc(l * 1.1) / 100%)`;
  }};
  animation: ${() => timerAnimation} ${({ $time }) => $time - 300}ms linear forwards;
`;

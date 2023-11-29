import { styled, keyframes } from 'styled-components';

import { fontSize } from '../../../Design/designSizes';
import colorTransparencyCalculator from '../../../Design/color/colorTransparencyCalculator';
import { boxShadow } from '../../../Design/shadows/shadows';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { getBackgroundColor } from '../../../Design/color/colorCalculatorForComponet';
import { TTheme } from '@/Components/UI/Interface/TTheme';

type ToastMessageProps = 'success' | 'warning' | 'error' | 'info';

interface IToastMessage {
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

// styles for single toast message
export const Container = styled.div<IToastMessage>`
  z-index: 99;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  color: ${({ $messageType, theme, $layer = 5 }) =>
    getBackgroundColor({ $themeType: $messageType, theme, $layer })}; //theme[$messageType]['5']
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => colorTransparencyCalculator(theme.colors.primary['0'], 0.95)};
  border-left: 4px solid ${({ $messageType, theme, $layer = 3 }) => getBackgroundColor({ $themeType: $messageType, theme, $layer })};
  box-sizing: border-box;
  ${boxShadow.md}
`;

export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    align-self: flex-start;
    line-height: ${fontSize.lg};
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
  background-color: ${({ $messageType, theme, $layer = 3 }) => getBackgroundColor({ $themeType: $messageType, theme, $layer })};
  animation: ${() => timerAnimation} ${({ $time }) => $time - 300}ms linear forwards;
`;

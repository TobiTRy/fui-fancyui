import { styled, keyframes } from 'styled-components';

import { borderRadius, fontSize, spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';

type ToastMessageProps = 'success' | 'warning' | 'error';

interface IToastMessage {
  $messageType: ToastMessageProps;
  theme: TUiColorsType;
}

interface TimerLineProps {
  $messageType: ToastMessageProps;
  $time: number;
  theme: TUiColorsType;
}

// styles for single toast message
export const Container = styled.div<IToastMessage>`
  z-index: 99;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  color: ${({ $messageType, theme }) => theme[$messageType][6]};
  border-radius: ${borderRadius.sm};
  padding: ${spacingPx.lg};
  background-color: ${({ $messageType, theme }) => colorTransparencyCalculator(theme[$messageType][0], 0.8)};
  border-left: 4px solid ${({ $messageType ,theme}) => theme[$messageType][3]};
  box-sizing: border-box;
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
  background-color: ${({ $messageType, theme }) => theme[$messageType][3]};
  animation: ${() => timerAnimation} ${({ $time }) => $time - 300}ms linear forwards;
`;
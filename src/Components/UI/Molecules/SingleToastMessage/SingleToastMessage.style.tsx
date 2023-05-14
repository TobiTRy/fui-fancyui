import styled, { keyframes } from 'styled-components';

import { borderRadius, colorPalet, fontSize, spacingPx } from '../../Design/design';

type ToastMessageProps = 'success' | 'warning' | 'error';

interface IToastMessage {
  messageType: ToastMessageProps;
}

interface TimerLineProps {
  messageType: ToastMessageProps;
  time: number;
}

// colors for different types of messages (success, warning, error)
const typeColors = {
  success: {
    dark: colorPalet.green_dark,
    light: colorPalet.green_light,
  },
  warning: {
    dark: colorPalet.yellow_dark,
    light: colorPalet.yellow_light,
  },
  error: {
    dark: colorPalet.red_dark,
    light: colorPalet.red_light,
  },
};


// styles for single toast message
export const Container = styled.div<IToastMessage>`
  z-index: 99;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  color: ${({ messageType }) => typeColors[messageType].light};
  border-radius: ${borderRadius.small};
  padding: ${spacingPx.lg};
  background-color: ${({ messageType }) => typeColors[messageType].dark};
  border-left: 4px solid ${({ messageType }) => typeColors[messageType].light};
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
  background-color: ${({ messageType }) => typeColors[messageType].light};
  animation: ${() => timerAnimation} ${({ time }) => time - 300}ms linear forwards;
`;

export const Title = styled.h4`
  font-size: ${fontSize.large};
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 8px;
`;

export const Message = styled.p`
  font-size: ${fontSize.medium};
  margin: 0;
`;

export const CloseButton = styled.button<IToastMessage>`
  position: absolute;
  padding: 0;
  top: 8px;
  right: 14px;
  color: ${({ messageType }) => typeColors[messageType].light};
  background: none;
  border: none;
  font-size: ${fontSize.extraLarge};
  font-weight: bolder;
  cursor: pointer;
  outline: none;
`;

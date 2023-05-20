import styled, { keyframes } from 'styled-components';

import { borderRadius, colorPalet, fontSize, systemMessages ,spacingPx } from '../../Design/design';

type ToastMessageProps = 'success' | 'warning' | 'error';

interface IToastMessage {
  messageType: ToastMessageProps;
}

interface TimerLineProps {
  messageType: ToastMessageProps;
  time: number;
}



// styles for single toast message
export const Container = styled.div<IToastMessage>`
  z-index: 99;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: left;
  color: ${({ messageType }) => systemMessages[messageType].light};
  border-radius: ${borderRadius.small};
  padding: ${spacingPx.lg};
  background-color: ${({ messageType }) => systemMessages[messageType].dark};
  border-left: 4px solid ${({ messageType }) => systemMessages[messageType].light};
  box-sizing: border-box;
`;

export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    align-self: flex-start;
    line-height: ${fontSize.large};
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
  background-color: ${({ messageType }) => systemMessages[messageType].light};
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
  padding: 0  ${spacingPx.sm} 2px;
  color: ${({ messageType }) => systemMessages[messageType].light};
  background: none;
  border: none;
  font-size: ${fontSize.large};
  font-weight: bolder;
  cursor: pointer;
  outline: none;
`;

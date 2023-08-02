import React from 'react'

import styled, { css } from 'styled-components';
import { spacingPx } from '../../Design/design';

const gradientOptions = {
  start: 'rgba(0,0,0,0.4) 0%',
  end: 'rgba(0,0,0,0) 40%',
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
const Overlay = styled.div<{ $position: string }>`
  position: absolute;
  width: 100%;
  height: 100%;

  ${({ $position }) => {
    switch ($position) {
      case 'top-left':
        return css`
          background: linear-gradient(135deg, ${gradientOptions.start}, ${gradientOptions.end});
        `;
      case 'top-right':
        return css`
          background: linear-gradient(225deg, ${gradientOptions.start}, ${gradientOptions.end});
        `;
      case 'center':
        return css`
          background: radial-gradient(ellipse 75% 50% at center, ${gradientOptions.start}, ${gradientOptions.end});
        `;
      case 'bottom-left':
        return css`
          background: linear-gradient(45deg, ${gradientOptions.start}, ${gradientOptions.end});
        `;
      case 'bottom-right':
        return css`
          background: linear-gradient(325deg, ${gradientOptions.start}, ${gradientOptions.end});
        `;
      default:
        return '';
    }
  }};
`;

const TextWrapper = styled.div<{ $position: string }>`
  position: absolute;
  z-index: 1;
  padding: ${spacingPx.md};
  text-shadow: 0 0 20px black;
  ${({ $position }) => {
    switch ($position) {
      case 'top-left':
        return css`
          text-align: left;
          top: 0;
          left: 0;
        `;
      case 'top-right':
        return css`
          text-align: right;
          top: 0;
          right: 0;
        `;
      case 'center':
        return css`
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
      case 'bottom-left':
        return css`
          text-align: left;
          bottom: 0;
          left: 0;
        `;
      case 'bottom-right':
        return css`
          text-align: right;
          bottom: 0;
          right: 0;
        `;
      default:
        return '';
    }
  }};
`;

export type TPositions = 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';

interface IImageVideoOverlay {
  children?: React.ReactNode;
  textChildren?: React.ReactNode;
  position?: TPositions;
}
export default function ImageVideoOverlay(props: IImageVideoOverlay) {
  const { children, position, textChildren } = { ...defaultProps, ...props };

  return (
    <Wrapper>
      <Overlay $position={position} />
      <TextWrapper $position={position}>{textChildren}</TextWrapper>
      {children}
    </Wrapper>
  );
}

const defaultProps = {
  position: 'top-right',
};

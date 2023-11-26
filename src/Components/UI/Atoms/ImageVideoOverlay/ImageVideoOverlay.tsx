import React from 'react';

import { styled, css } from 'styled-components';
import { textShadow } from '../../Design/shadows/shadows';
import { TTheme } from '@/Components/UI/Interface/TTheme';

// Define the gradient options for the overlay
const gradientOptions = {
  start: 'rgba(0,0,0,0.4) 0%',
  end: 'rgba(0,0,0,0) 40%',
};

// Define a styled wrapper component using styled-components
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  line-height: 0;
  pointer-events: none;
`;

// Define a styled overlay component using styled-components
const Overlay = styled.div<{ $position: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

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

// Define a styled text wrapper component using styled-components
const TextWrapper = styled.div<{ $position: string; theme: TTheme }>`
  position: absolute;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.md};
  pointer-events: none;
  ${textShadow.lg}

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

// Define the possible positions for the overlay
export type TPositions = 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';

// Define the props for the ImageVideoOverlay component
interface IImageVideoOverlay {
  children?: React.ReactNode;
  textChildren?: React.ReactNode;
  position?: TPositions;
}

// --------------------------------------------------------------------------- //
// ----------- The Definition for the ImageVideoOverlay Component ------------ //
// --------------------------------------------------------------------------- //
export default function ImageVideoOverlay(props: IImageVideoOverlay) {
  const { children, position, textChildren } = { ...defaultProps, ...props };

  return (
    <Wrapper>
      <Overlay $position={position} />
      <TextWrapper $position={position}>{textChildren}</TextWrapper>
      {/* The children is normaly only a Video or a image, but do with it what d o you fuucking want */}
      {children}
    </Wrapper>
  );
}

// Define the default props for the ImageVideoOverlay component
const defaultProps = {
  position: 'top-right',
};

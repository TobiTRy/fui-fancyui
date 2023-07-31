import React from 'react'
import styled from 'styled-components';
import FancyImage, { IFancyImage } from '../../Atoms/FancyImage/FancyImage';


const TextWrapper = styled.div<{ position: string }>`
  position: absolute;
  padding: 8px;
  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return `
          top: 0;
          left: 0;
        `;
      case 'top-right':
        return `
          top: 0;
          right: 0;
        `;
      case 'center':
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
      case 'bottom-left':
        return `
          bottom: 0;
          left: 0;
        `;
      case 'bottom-right':
        return `
          bottom: 0;
          right: 0;
        `;
      default:
        return '';
    }
  }};
`;

interface IImageWithTextProps extends IFancyImage {
  children?: React.ReactNode;
  position?: 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';
}
export default function FancyImageText(props: IImageWithTextProps) {
  const { children, position, ...restProps } = {...defaultProps, ...props};
  return (
    
    <FancyImage {...restProps}>
      <TextWrapper position={position}>
        <p>Hiiiii</p>
        {children}
      </TextWrapper>
    </FancyImage>
  );
}

const defaultProps = {
  position: 'top-left',
}
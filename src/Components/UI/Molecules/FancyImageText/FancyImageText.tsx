import React from 'react'
import styled from 'styled-components';
import Typography, { ITypography } from '../../Atoms/Typography/Typography';
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
  title: ITypography;
  subtitle: ITypography;
  position: 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';
}
export default function FancyImageText(props: IImageWithTextProps) {
  const { title, subtitle, position, ...restProps } = props;
  return (
    <FancyImage {...restProps}>
      <TextWrapper position={position}>
        <Typography >{title}</Typography>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
    </FancyImage>
  );
}

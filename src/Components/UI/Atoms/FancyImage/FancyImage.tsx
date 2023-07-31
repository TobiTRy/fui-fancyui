import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div<{ aspectRatio: string }>`
  width: 100%;
  padding-bottom: ${({ aspectRatio }) => {
    const [width, height] = aspectRatio.split(':').map(Number);
    return `${(height / width) * 100}%`;
  }};
  position: relative;
`;

const StyledImage = styled.img<{ darken?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: filter 0.3s;
  filter: ${({ darken }) => (darken ? 'brightness(0.5)' : 'none')};
`;


export interface IFancyImage {
  imageUrl: string;
  aspectRatio: string; // e.g. "16:9"
  darken?: boolean;
  link?: string;
}

export default function FancyImage(props: IFancyImage) {
  const { imageUrl, aspectRatio, darken, link } = props;

  return (
    <Wrapper aspectRatio={aspectRatio}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <StyledImage src={imageUrl} darken={darken} />
        </a>
      ) : (
        <StyledImage src={imageUrl} darken={darken} />
      )}
    </Wrapper>
  );
}

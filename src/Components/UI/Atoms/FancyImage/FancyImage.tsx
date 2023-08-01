import React from 'react';
import styled from 'styled-components';




const StyledImage = styled.img<{ $darken?: boolean, $aspectRatio?: string }>`
  width: 100%;
  object-fit: cover;
  transition: filter 0.3s;
  ${({ $aspectRatio }) => ($aspectRatio ? `aspect-ratio: ${$aspectRatio};` : '')}
  aspect-ratio: 1 / 1;
  filter: ${({ $darken }) => ($darken ? 'brightness(0.5)' : 'none')};
`;

export interface IFancyImage {
  imageUrl: string;
  aspectRatio?: string; // e.g. "16/9"
  darken?: boolean;
  link?: string;
  alt?: string;
}
export default function FancyImage(props: IFancyImage) {
  const { imageUrl, aspectRatio, darken, link, alt } = props;

  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <StyledImage src={imageUrl} $darken={darken} $aspectRatio={aspectRatio} alt={alt}/>
        </a>
      ) : (
        <StyledImage src={imageUrl} $darken={darken} alt={alt}/>
      )}
    </>

  );
}

import React from 'react';
import styled from 'styled-components';

import aspectRatioValidation from '../../HelperFunctions/validations/aspectRatioValidation';

// Define a styled image component using styled-components
const StyledImage = styled.img<{ $darken?: boolean, $aspectRatio?: string }>`
  width: 100%;
  object-fit: cover;
  transition: filter 0.3s;
  ${({ $aspectRatio }) => ($aspectRatio ? `aspect-ratio: ${$aspectRatio};` : '')}
  filter: ${({ $darken }) => ($darken ? 'brightness(0.5)' : 'none')};
`;

// Define the props for the FancyImage component

export interface IFancyImage {
  imageUrl: string;
  aspectRatio?: string; // e.g. "16/9"
  darken?: boolean;
  link?: string;
  alt?: string;
}
// --------------------------------------------------------------------------- //
// -------------- The Definition for the FancyImage Component ---------------- //
// --------------------------------------------------------------------------- //
export default function FancyImage(props: IFancyImage) {
  const { imageUrl, aspectRatio, darken, link, alt } = props;

  // Validate the aspect ratio if it is provided
  if(aspectRatio && !aspectRatioValidation(aspectRatio)) {
    throw new Error('The aspect ratio is not valid. Please use the format "16/9"');
  }

  // Render the image with or without a link depending on whether a link is provided
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
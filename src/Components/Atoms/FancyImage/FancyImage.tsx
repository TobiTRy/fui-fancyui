import React from 'react';

import { StyledA, StyledImage } from './FancyImage.style';

import aspectRatioValidation from '../../utils/validations/aspectRatioValidation';

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
  if (aspectRatio && !aspectRatioValidation(aspectRatio)) {
    throw new Error('The aspect ratio is not valid. Please use the format "16/9"');
  }

  // Render the image with or without a link depending on whether a link is provided
  return (
    <>
      {link ? (
        <StyledA href={link} target="_blank" rel="noopener noreferrer">
          <StyledImage src={imageUrl} $darken={darken} $aspectRatio={aspectRatio} alt={alt} />
        </StyledA>
      ) : (
        <StyledImage src={imageUrl} $darken={darken} alt={alt} />
      )}
    </>
  );
}

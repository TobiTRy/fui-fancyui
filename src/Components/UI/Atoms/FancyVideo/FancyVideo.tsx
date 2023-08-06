import React from 'react';
import styled from 'styled-components';
import aspectRatioValidation from '../../HelperFunctions/validations/aspectRatioValidation';

// Define a styled video component using styled-components
const StyledVideo = styled.video<{ $aspectRatio?: string, $darken?: boolean }>`
  object-fit: cover;
  width: 100%;
  height: auto;
  ${({ $aspectRatio }) => ($aspectRatio ? `aspect-ratio: ${$aspectRatio};` : '')}
  filter: ${({ $darken }) => ($darken ? 'brightness(0.5)' : 'none')};
`;

// Define the props for the FancyVideo component
export interface IFancyVideo {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  aspectRatio?: string; // e.g. "16/9"
  darken?: boolean;
}
// --------------------------------------------------------------------------- //
// -------------- The Definition for the FancyVideo Component ---------------- //
// --------------------------------------------------------------------------- //
export default function FancyVideo(props: IFancyVideo) {
  const { src, controls, autoPlay, loop, muted, poster, aspectRatio, darken = true } = props;

  // Validate the aspect ratio if it is provided
  if(aspectRatio && !aspectRatioValidation(aspectRatio)) {
    throw new Error('The aspect ratio is not valid. Please use the format "16/9"');
  }

  // Render the video with the appropriate props
  return (
    <StyledVideo controls={controls} autoPlay={autoPlay} $aspectRatio={aspectRatio} loop={loop} muted={autoPlay ? true : muted} poster={poster} $darken={darken}>
      <source src={src} type="video/mp4" />
    </StyledVideo>
  );
}
import React from 'react';

import styled from 'styled-components';
import aspectRatioValidation from '../../HelperFunctions/aspectRatioValidation';

const StyledVideo = styled.video<{ $aspectRatio?: string, $darken?: boolean }>`
  object-fit: cover;
  width: 100%;
  height: auto;
  ${({ $aspectRatio }) => ($aspectRatio ? `aspect-ratio: ${$aspectRatio};` : '')}
  filter: ${({ $darken }) => ($darken ? 'brightness(0.5)' : 'none')};
`;

export interface IFancyVideo {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  aspectRatio?: string;
  darken?: boolean;
}

export default function FancyVideo(props: IFancyVideo) {
  const { src, controls, autoPlay, loop, muted, poster, aspectRatio, darken = true } = props;

  if(aspectRatio && !aspectRatioValidation(aspectRatio)) {
    throw new Error('The aspect ratio is not valid. Please use the format "16/9"');
  }

  //https://www.w3schools.com/html/mov_bbb.mp4

  return (
    <StyledVideo controls={controls} autoPlay={autoPlay} $aspectRatio={aspectRatio} loop={loop} muted={autoPlay ? true : muted} poster={poster} $darken={darken}>
      <source src={src} type="video/mp4" />
    </StyledVideo>
  );
}

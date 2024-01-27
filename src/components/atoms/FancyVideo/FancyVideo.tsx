import React from 'react';
import { styled } from 'styled-components';

import { isAspectRatioValid } from '@/utils/validations/isAspectRatioValid';
import { FancyVideoSource } from '@/components/atoms/FancyVideo/FancyVideoSource';

// Define the props for the FancyVideo component
export type TFancyVideo = {
  autoPlay?: boolean;
  muted?: boolean;
  aspectRatio?: string; // e.g. "16/9"
  darken?: boolean;
} & React.VideoHTMLAttributes<HTMLVideoElement>;
// --------------------------------------------------------------------------- //
// -------------- The Definition for the FancyVideo Component ---------------- //
// --------------------------------------------------------------------------- //
export default function FancyVideo(props: TFancyVideo) {
  const { autoPlay, muted, aspectRatio, darken, ...htmlProps } = props;

  // Validate the aspect ratio if it is provided
  if (aspectRatio && !isAspectRatioValid(aspectRatio)) {
    throw new Error('The aspect ratio is not valid. Please use the format "16/9"');
  }

  // Render the video with the appropriate props
  return (
    <StyledVideo $aspectRatio={aspectRatio} muted={autoPlay ? true : muted} $darken={darken} {...htmlProps}>
      {props.children}
    </StyledVideo>
  );
}

FancyVideo.Source = FancyVideoSource;

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const StyledVideo = styled.video<{ $aspectRatio?: string; $darken?: boolean }>`
  object-fit: cover;
  width: 100%;
  height: auto;
  ${({ $aspectRatio }) => ($aspectRatio ? `aspect-ratio: ${$aspectRatio};` : '')}
  filter: ${({ $darken }) => ($darken ? 'brightness(0.5)' : 'none')};
`;

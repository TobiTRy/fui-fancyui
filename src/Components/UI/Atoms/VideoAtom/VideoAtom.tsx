import React from 'react';

import styled from 'styled-components';

const StyledVideo = styled.video<{ aspectRatio?: string }>`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

interface IVideoAtom {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
}

export default function VideoAtom(props: IVideoAtom) {
  const { src, controls, autoPlay, loop, muted, poster, width, height, aspectRatio } = props;

  //https://www.w3schools.com/html/mov_bbb.mp4

  return (
    <StyledVideo controls={controls} autoPlay={autoPlay} loop={loop} muted={autoPlay ? true : muted} poster={poster}>
      <source src={src} type="video/mp4" />
    </StyledVideo>
  );
}

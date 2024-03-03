import { styled } from 'styled-components';

export const StyledVideo = styled.video<{ $aspectRatio?: string; $darken?: number }>`
  object-fit: cover;
  width: 100%;
  height: auto;
  ${({ $aspectRatio }) => ($aspectRatio ? `aspect-ratio: ${$aspectRatio};` : '')}
  filter: ${({ $darken }) => ($darken ? `brightness(${$darken})` : 'none')};
`;

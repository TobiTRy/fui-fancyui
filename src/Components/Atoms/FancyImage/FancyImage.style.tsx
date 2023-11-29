import { styled } from 'styled-components';

export const StyledImage = styled.img<{ $darken?: boolean; $aspectRatio?: string }>`
  width: 100%;
  object-fit: cover;
  transition: filter 0.3s;
  ${({ $aspectRatio }) => ($aspectRatio ? `aspect-ratio: ${$aspectRatio};` : '')}
  filter: ${({ $darken }) => ($darken ? 'brightness(0.5)' : 'none')};
`;

export const StyledA = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: auto;
`;

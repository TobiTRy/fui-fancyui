import { styled } from 'styled-components';

import { TFancyImage } from '@/components/atoms/FancyImage/FancyImage';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';

type TFancyImage = IStyledPrefixAndPicker<TFancyImage, 'darken' | 'aspectRatio' | 'externalStyle'>;
export const StyledImage = styled.img<TFancyImage>`
  width: 100%;
  object-fit: cover;
  transition: filter 0.3s;
  filter: ${({ $darken }) => ($darken ? `brightness(${$darken === true ? '0.5' : $darken})` : 'none')};
  aspect-ratio: ${({ $aspectRatio }) => ($aspectRatio ? `${$aspectRatio};` : '')};
  ${({ $externalStyle }) => $externalStyle};
`;

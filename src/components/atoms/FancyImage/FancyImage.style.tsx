import { styled } from 'styled-components';

import { IFancyImage } from '@/components/atoms/FancyImage/FancyImage';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';

type TFancyImage = IStyledPrefixAndPicker<IFancyImage, 'darken' | 'aspectRatio' | 'externalStyle'>;
export const StyledImage = styled.img<TFancyImage>`
  width: 100%;
  object-fit: cover;
  transition: filter 0.3s;
  filter: ${({ $darken }) => ($darken ? 'brightness(0.5)' : 'none')};
  aspect-ratio: ${({ $aspectRatio }) => ($aspectRatio ? `${$aspectRatio};` : '')};
  ${({ $externalStyle }) => $externalStyle};
`;

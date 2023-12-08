import { styled } from 'styled-components';

import { IFancyImage } from '@/components/atoms/FancyImage/FancyImage';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker.model';

type TFancyImage = IStyledPrefixAndPicker<IFancyImage, 'darken' | 'aspectRatio' | 'externalStyle'>;
export const StyledImage = styled.img<TFancyImage>`
  width: 100%;
  object-fit: cover;
  transition: filter 0.3s;
  ${({ $aspectRatio }) => ($aspectRatio ? `aspect-ratio: ${$aspectRatio};` : '')}
  filter: ${({ $darken }) => ($darken ? 'brightness(0.5)' : 'none')};
  ${({ $externalStyle }) => $externalStyle}
`;

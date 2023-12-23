import { styled } from 'styled-components';

import { FancyCard } from '@/components/atoms/FancyCard';
import { sizeSettings } from './sizeSettings';
import { TFancyMiniContentCardProps } from './FancyMiniContentCard';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';

type IStyledCard = IStyledPrefixAndPicker<TFancyMiniContentCardProps, 'size'>;
export const StyledCard = styled(FancyCard)<IStyledCard>`
  aspect-ratio: 1/1;
  width: ${({ $size = 'md' }) => sizeSettings[$size].size};
`;

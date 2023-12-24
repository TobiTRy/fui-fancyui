import { styled } from 'styled-components';

import { FancyCard } from '@/components/atoms/FancyCard';
import { TFancyMiniContentCardProps } from './FancyMiniContentCard';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';

type IStyledCard = IStyledPrefixAndPicker<TFancyMiniContentCardProps, 'size'>;
export const StyledCard = styled(FancyCard)<IStyledCard>`
  flex: 1;
  text-align: center;
`;

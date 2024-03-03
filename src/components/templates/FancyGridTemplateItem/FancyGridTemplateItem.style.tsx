import { styled } from 'styled-components';

import { TGridItem } from '@/components/templates/FancyGridTemplateItem';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

type TStyledGridItem = TStyledPrefixAndPicker<TGridItem>;
export const GridItem = styled.div<TStyledGridItem>`
  grid-area: ${({ $gridArea }) => $gridArea};
  ${({ $externalStyle }) => $externalStyle};
`;

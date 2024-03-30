import { styled } from 'styled-components';

import { TFancyGridTemplateItem } from '@/components/templates/FancyGridTemplateItem';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

type TStyledGridItem = TStyledPrefixAndPicker<TFancyGridTemplateItem>;
export const GridItem = styled.div<TStyledGridItem>`
  grid-area: ${({ $gridArea }) => $gridArea};
  ${({ $externalStyle }) => $externalStyle};
`;

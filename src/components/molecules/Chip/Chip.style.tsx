import { styled } from 'styled-components';

import { FancyPill } from '@/components/atoms/FancyPill';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';
import { IFancyPill } from '@/components/atoms/FancyPill/FancyPill.model';

type TStyledChip = IFancyPill & {
  $size: keyof typeof sizesSettings;
};
export const StyledChip = styled(FancyPill)<TStyledChip>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  height: ${({ $size }) => sizesSettings[$size].height};
`;

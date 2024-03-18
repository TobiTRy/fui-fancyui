import { styled } from 'styled-components';

import { FancyPill } from '@/components/atoms/FancyPill';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';
import { TFancyPill } from '@/components/atoms/FancyPill/TFancyPill.model';

type TStyledChip = TFancyPill & {
  $sizeC: keyof typeof sizesSettings;
};
export const StyledChip = styled(FancyPill)<TStyledChip>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  height: ${({ $sizeC }) => sizesSettings[$sizeC].height};
`;

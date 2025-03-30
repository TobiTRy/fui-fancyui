import { styled } from 'styled-components';

import { FancyPill } from '@/components/atoms/FancyPill';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';
import { TFancyPill } from '@/components/atoms/FancyPill/TFancyPill.model';
import { TTheme } from '@/types';

type TStyledChip = TFancyPill & {
  $sizeC: keyof typeof sizesSettings;
  theme: TTheme;
};
export const StyledChip = styled(FancyPill)<TStyledChip>`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  height: ${({ $sizeC, theme }) => theme.globalElementSizes[sizesSettings[$sizeC].height]};
`;

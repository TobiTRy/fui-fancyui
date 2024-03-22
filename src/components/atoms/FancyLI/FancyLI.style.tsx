import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';

import { TFancyLI } from './TFancyLI.model';

type StyledFancyLi = TStyledPrefixAndOmiter<TFancyLI>;
export const FancyLiItem = styled.li<StyledFancyLi & { theme: TTheme }>`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${({ $aligned }) => $aligned};
  padding: ${({ theme, $sizeC }) => $sizeC && theme.spacing[$sizeC]};
`;

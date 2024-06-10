import { styled } from 'styled-components';

import { TSpacings } from '@/types/TSpacings';
import { TTheme } from '@/types/TTheme';
import { TFancyModalHeadLine } from './FancyModalHeadLine.model';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';

export const StyledHeadLine = styled.div<{ theme: TTheme; $gap?: TSpacings }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  hr {
    margin-top: ${({ theme }) => theme.spacing.xs};
    width: 100%;
  }
`;

type TStyledHeadLineTitles = TStyledPrefixAndPicker<TFancyModalHeadLine, 'alignCenter' | 'gapBetweenText'>;
export const StyledHeadLineTitles = styled.span<TStyledHeadLineTitles & { theme: TTheme }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $alignCenter }) => ($alignCenter ? 'center' : 'flex-start')};
  gap: ${({ theme, $gapBetweenText }) => $gapBetweenText && theme.spacing[$gapBetweenText || 'xxs']};
  padding: ${({ $alignCenter, theme }) => ($alignCenter ? `0 ${theme.spacing.xl}` : `0 ${theme.spacing.xl} 0 0 `)};
  width: 100%;
  box-sizing: border-box;
`;

export const HeadLineWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const IconWrapper = styled.span<{ theme: TTheme }>`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xs};
  top: ${({ theme }) => theme.spacing.xs};
`;

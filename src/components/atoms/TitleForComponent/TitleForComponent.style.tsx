import { styled } from 'styled-components';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TTheme } from '@/types/TTheme';
import { TSpacings } from '@/types/TSpacings';

export const TitleWrapper = styled.div<{ $align?: TTextAlignLC }>`
  text-align: ${({ $align }) => $align ?? 'left'};
`;

export const Wrapper = styled.div<{ theme?: TTheme; $spacing: TSpacings }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $spacing }) => theme.spacing[$spacing]};
`;

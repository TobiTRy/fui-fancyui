import { TTheme } from '@/types/TTheme';
import styled from 'styled-components';

export const ItemWrapper = styled.div<{ theme: TTheme }>`
  position: relative;
`;

export const Item = styled.div<{ theme: TTheme }>`
  margin: ${({ theme }) => `0 ${theme.spacing.xs}`};
`;

export const SlotTop = styled.div<{ theme: TTheme }>`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => `0 ${theme.spacing.xs} 0 ${theme.spacing.xs}`};
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const SlotBottom = styled.div<{ theme: TTheme }>`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin: ${({ theme }) => `auto ${theme.spacing.xs} 0 ${theme.spacing.xs}`};
  gap: ${({ theme }) => theme.spacing.xs};
`;

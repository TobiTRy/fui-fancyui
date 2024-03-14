import { TTheme } from '@/types/TTheme';
import { styled } from 'styled-components';

export const StyledHeadLine = styled.div<{ $alignCenter?: boolean; theme: TTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xxs};
  align-items: ${({ $alignCenter }) => ($alignCenter ? 'center' : 'flex-start')};

  hr {
    margin-top: ${({ theme }) => theme.spacing.xs};
    width: 100%;
  }
`;

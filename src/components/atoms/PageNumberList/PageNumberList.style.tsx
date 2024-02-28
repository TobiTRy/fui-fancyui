import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';

export const Wrapper = styled.div<{ theme: TTheme }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

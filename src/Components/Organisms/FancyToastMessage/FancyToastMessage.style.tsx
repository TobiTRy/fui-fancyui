import { styled } from 'styled-components';

import { TTheme } from '@/components/core/interface/TTheme';

export const ToastsWrapper = styled.div<{ theme: TTheme }>`
  position: fixed;
  z-index: 1000;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  width: calc(100% - ${({ theme }) => theme.spacing.md} * 2);
  max-width: 350px;
  display: flex;
  flex-direction: column;
`;

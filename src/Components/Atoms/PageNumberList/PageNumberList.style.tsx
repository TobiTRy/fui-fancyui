import { styled } from 'styled-components';
import { TTheme } from '@/interface/TTheme';
import { simpleColorTransition } from '../../../design/designFunctions/simpleTransition';

// Define a styled component for the button wrapper
export const ButtonWrapper = styled.div<{ $isActive: boolean; theme: TTheme }>`
  button {
    color: ${({ $isActive, theme }) => $isActive && theme.colors.accent[0]};
    ${simpleColorTransition}
    padding: ${({ theme }) => theme.spacing.sm};

    &:hover {
      color: ${({ $isActive, theme }) => $isActive && theme.colors.accent[0]};
    }
  }
`;

export const Wrapper = styled.div<{ theme: TTheme }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

import { styled } from 'styled-components';
import { TTheme } from '@/Components/UI/Interface/TTheme';
import { simpleColorTransition } from '../../Design/simpleTransition';

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

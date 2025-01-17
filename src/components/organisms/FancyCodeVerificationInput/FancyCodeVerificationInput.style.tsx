import { styled, css } from 'styled-components';
import { TTheme } from '@/types/TTheme';

export const WarpperComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageContainer = styled.div<{ theme: TTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const Message = styled.div<{ $isError?: boolean; theme: TTheme }>`
  color: ${({ theme }) => theme.color.secondary[0]};
  max-height: 0;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;

  ${({ $isError, theme }) =>
    $isError &&
    css`
      color: ${theme.color.error[0]};
      max-height: 100px;
      visibility: visible;
      opacity: 1;
    `}

  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

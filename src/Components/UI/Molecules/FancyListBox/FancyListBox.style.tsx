import { css } from 'styled-components';
import { TTheme } from '../../Interface/TTheme';

export const FancyBoxStyle = css<{ theme: TTheme }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: space-between;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

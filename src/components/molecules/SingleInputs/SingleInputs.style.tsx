import { styled } from 'styled-components';

import { IStatus } from '@/types/IStatus';
import { TTheme } from '@/types/TTheme';

interface TInputWrapper {
  $status?: Omit<IStatus, 'isLoading'>;
  theme: TTheme;
}
export const InputWrapper = styled.div<TInputWrapper>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.md};

  input {
    ${({ $status, theme }) =>
      $status?.isError
        ? `border-color: ${theme.color.error[0]}`
        : $status?.isSucceed
          ? `border-color: ${theme.color.success[0]};`
          : ''};
    transition: border-color 0.3s ease-in-out;
  }
`;

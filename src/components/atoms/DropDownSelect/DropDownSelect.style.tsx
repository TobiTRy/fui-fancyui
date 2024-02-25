import { css, styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';

//the selectfield for the options
interface ISelectField {
  $align?: string;
  $labelAlign?: 'center' | 'left';
  $disabledAndSelected?: boolean;
}
export const SelectField = styled.select<ISelectField & { theme: TTheme }>`
  position: relative;
  box-sizing: border-box;
  ${({ theme }) => css`
    background-image: ${`url("data:image/svg+xml;utf8,<svg viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='${theme.colors.secondary[4].replace(
      '#',
      '%23'
    )}'><path d='M.508 5.444c-.261.246-.363.508-.363.9 0 .523.174.726 4.181 4.718 3.861 3.861 4.21 4.18 4.674 4.18s.813-.319 4.674-4.181c4.007-3.992 4.181-4.195 4.181-4.717 0-.711-.523-1.263-1.19-1.263-.421 0-.842.377-4.065 3.585L9 12.252 5.4 8.666C2.177 5.458 1.756 5.081 1.335 5.081c-.319 0-.595.131-.827.363z'/></svg>")`};
  `}

  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.spacing.xxs} bottom 30%;
  text-align-last: ${({ $align }) => ($align !== 'center' ? 'left' : 'center')};
  color: ${({ theme }) => theme.colors.secondary[0]};
  border: none;
  width: 100%;
  font-weight: 500;
  user-select: none;
  appearance: none;
  padding: 0px 0px ${({ theme }) => theme.spacing.xs};
  background-color: transparent;

  &:disabled {
    ${disabledStyle}
  }

  &:focus {
    outline: none;
  }

  /* When a item is checked in the dropdown */
  &:focus option:checked {
    background: ${({ theme }) => theme.colors.accent[1]};
  }

  optgroup {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accent[2]};
    background-color: ${({ theme }) => theme.colors.primary[2]};
    text-align: ${({ $align }) => ($align !== 'left' ? 'center' : 'left')};

    &:disabled {
      background: ${({ theme }) => theme.colors.secondary[9]};
    }
  }

  option {
    background-color: ${({ theme }) => theme.colors.primary[1]};
    text-align: ${({ $align }) => ($align !== 'left' ? 'center' : 'left')};
    color: ${({ theme }) => theme.colors.secondary[0]};

    &:disabled {
      background: ${({ theme }) => theme.colors.secondary[9]};
    }
  }
`;

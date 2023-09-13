import { styled } from 'styled-components';
import { fontSize } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

export const StyledYearSelector = styled.div<{ theme: TUiColorsType }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.secondary[0]};

  span {
    font-size: ${fontSize.lg};
  }
`;

export const StyledButton = styled.button<{ theme: TUiColorsType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.secondary[0]};
  border: none;
  padding: 0;
  cursor: pointer;
`;

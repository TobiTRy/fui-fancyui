import { styled } from 'styled-components';
import InputStatus from "../../Design/Interfaces/IStatus";
import { spacingPx } from "../../Design/designSizes";
import { TUiColorsType } from '../../Design/color/designColor';


interface IInputWrapper {
  $status?: Omit<InputStatus, 'isLoading'>;
  theme: TUiColorsType;
}
export const InputWrapper = styled.div<IInputWrapper>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: ${spacingPx.md};

  input {
    ${({ $status, theme }) =>
      $status?.isError ? `border-color: ${theme.error[0]}` : $status?.isSucceed ? `border-color: ${theme.success[0]};` : ''};
    transition: border-color 0.3s ease-in-out;
  }
`;

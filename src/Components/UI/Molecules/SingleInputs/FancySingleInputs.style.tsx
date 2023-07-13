import styled from "styled-components";
import InputStatus from "../../Design/Interfaces/IStatus";
import { colorPalet, spacingPx } from "../../Design/design";

export const InputWrapper = styled.div<{ $status?: InputStatus }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: ${spacingPx.md};

  input {
    ${({ $status }) =>
      $status?.isError ? `border-color: ${colorPalet.red_light}` : $status?.isSucceed ? `border-color: ${colorPalet.green_light};` : ''};
    transition: border-color 0.3s ease-in-out;
  }
`;

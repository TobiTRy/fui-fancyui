import styled from "styled-components";
import { disabledStyle } from "../HelperFunctions/disableStyle";

export const InputWarapper = styled.div<{disabled?: boolean}>`
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  width: 100%;
  
  ${({disabled}) => disabled ? disabledStyle : ''};
`;

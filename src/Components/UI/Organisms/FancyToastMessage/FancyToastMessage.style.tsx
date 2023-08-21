import { styled } from 'styled-components';
import { spacingPx } from "../../Design/design";

export const ToastsWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: ${spacingPx.md};
  right: ${spacingPx.md};
  width: calc(100% - ${spacingPx.md} * 2);
  max-width: 350px;
  display: flex;
  flex-direction: column;
`;

import styled from "styled-components";
import { borderRadius } from "../../Design/designSizes";

// Styled component for the search bar list
export const StyledSearchBarList = styled.div`
  border-radius: ${borderRadius.xl};
  z-index: 100;
`;

// Styled component for the inner card of the search bar list
export const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

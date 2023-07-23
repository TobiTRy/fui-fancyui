import styled from "styled-components";

export const ScollAbleBar = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
import { styled } from 'styled-components';

export const ScollAbleBar = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

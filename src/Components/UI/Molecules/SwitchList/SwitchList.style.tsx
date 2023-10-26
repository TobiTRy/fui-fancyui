import { styled, CSSProp } from 'styled-components';

export const StyledList = styled.div<{ externalStyle?: CSSProp }>`
  display: flex;
  justify-content: space-evenly;
  ${({ externalStyle }) => externalStyle};
`;

export const ItemWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

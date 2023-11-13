import { styled, CSSProp } from 'styled-components';

export const StyledList = styled.div<{ $externalStyle?: CSSProp; $direction?: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction === 'vertical' ? 'column' : 'row')};
  justify-content: space-evenly;
  width: 100%;
  ${({ $externalStyle }) => $externalStyle};
`;

export const ItemWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

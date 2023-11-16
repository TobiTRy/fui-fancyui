import { styled } from 'styled-components';


// Define the styled component for the item wrapper
export const ItemWrapper = styled.div`
  flex: 1 0 64px;
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.55));
`;

export const Icon = styled.div`
  height: 18px;
  width: 18px;

  svg {
    height: 100%;
    width: 100%;
  }
`;

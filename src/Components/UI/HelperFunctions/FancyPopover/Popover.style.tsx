import { styled } from 'styled-components';

export const RefContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ContentContainer = styled.div`
  position: absolute;
  z-index: 1000;
`;

export const PopoverContainer = styled.div<{ $isVisible: boolean;}>`
  position: fixed;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;

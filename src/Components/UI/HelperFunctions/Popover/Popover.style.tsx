import { styled } from 'styled-components';

export const PopoverContainer = styled.div<{ $isVisible: boolean;  }>`
  position: absolute;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;
import { styled } from 'styled-components';

// Styled component for the wrapper around the search bar list
export const WrapperListInput = styled.div`
  position: relative;
`;

// Styled component for the search bar list
export const WrapperList = styled.div<{ $width?: string }>`
  position: absolute;
  top: calc(100%);
  width: ${({ $width }) => $width || '100%'}; // Set the width of the search bar list
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

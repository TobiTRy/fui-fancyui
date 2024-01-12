import { styled } from 'styled-components';

export const SliderWrapper = styled.div<{ $isLabelProvided: boolean }>`
  padding-top: ${({ $isLabelProvided }) => ($isLabelProvided ? '20px' : '8px')};
  transition: padding-top 0.25s ease;
  position: relative;
`;

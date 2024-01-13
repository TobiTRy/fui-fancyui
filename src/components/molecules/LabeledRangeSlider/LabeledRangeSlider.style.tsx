import { globalElementsizes } from '@/design/theme/globalSizes';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const SliderWrapper = styled.div<{ $isLabelProvided: boolean }>`
  padding-top: ${({ $isLabelProvided }) => ($isLabelProvided ? globalElementsizes.xs : '8px')};
  transition: padding-top 0.25s ease;
  position: relative;
`;

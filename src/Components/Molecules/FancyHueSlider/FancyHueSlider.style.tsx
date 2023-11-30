import { styled } from 'styled-components';

import { TTheme } from '@/components/core/interface/TTheme';

export const SliderWrapper = styled.div`
  width: 100%;
  padding: 3px;
`;

//the slider with the hue gradient
export const SliderContainer = styled.div<{ theme: TTheme }>`
  position: relative;
  height: 20px;
  background: linear-gradient(to right, red 0%, yellow 17%, lime 33%, cyan 50%, blue 67%, magenta 83%, red 100%);
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  user-select: none;
`;

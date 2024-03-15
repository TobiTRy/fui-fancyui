import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { TThemeArrayOrValueCSS, arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

export const SliderWrapper = styled.div<{ $height: string }>`
  width: 100%;
  padding: 3px;
  height: ${({ $height }) => $height};
`;

//the slider with the hue gradient
export const SliderContainer = styled.div<{ theme: TTheme; $borderRadius: TThemeArrayOrValueCSS }>`
  position: relative;
  height: 100%;
  background: linear-gradient(to right, red 0%, yellow 17%, lime 33%, cyan 50%, blue 67%, magenta 83%, red 100%);
  cursor: pointer;
  border-radius: ${({ $borderRadius }) => arrayToCssValues($borderRadius, 'borderRadius')};
  user-select: none;
`;

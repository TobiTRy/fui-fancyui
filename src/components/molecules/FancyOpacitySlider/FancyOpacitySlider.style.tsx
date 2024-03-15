import { styled } from 'styled-components';
import { TThemeArrayOrValueCSS, arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

export const Wrapper = styled.div<{ $height: string }>`
  width: 100%;
  padding: 3px;
  height: ${({ $height }) => $height};
`;

export const SliderWrapper = styled.div`
  padding: 3px;
  overflow: hidden;
`;

// the container of the slider
export const SliderContainer = styled.div`
  position: relative;

  cursor: pointer;
  height: 100%;
  user-select: none;
`;

// the opacity gradient of the slider wich displays the opacity of the current color
export const OpacityGradient = styled.div<{ $borderRadius: TThemeArrayOrValueCSS }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: ${({ $borderRadius }) => arrayToCssValues($borderRadius, 'borderRadius')};
`;

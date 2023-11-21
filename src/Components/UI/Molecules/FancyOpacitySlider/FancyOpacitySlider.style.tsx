import Color from 'color';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 3px;
`;

export const SliderWrapper = styled.div`
  padding: 3px;
  overflow: hidden;
`;

// the container of the slider
export const SliderContainer = styled.div`
  position: relative;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
`;

// the opacity gradient of the slider wich displays the opacity of the current color
export const OpacityGradient = styled.div.attrs<{ $color: Color }>(({ $color }) => {
  const transformedToColor = Color($color).hsl();
  const gradientStart = transformedToColor.alpha(0).toString();
  const gradientEnd = transformedToColor.alpha(1).toString();

  return {
    style: {
      background: `linear-gradient(to right, ${gradientStart} 0%, ${gradientEnd} 90%)`,
    },
  };
})<{ $color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 4px;
`;

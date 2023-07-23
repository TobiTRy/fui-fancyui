import Color from "color";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 3px;
`;

// the chekcboard pattern that is displayed in the background of the slider
export const CheckerboardPattern = styled.div`
  position: absolute;
  height: 20px;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%);
  background-size: 14px 14px;
  background-position: 0 0, 0 7px, 7px -7px, -7px 0px;
  opacity: 0.05;
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
import Color from "color";
import styled from "styled-components";

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



// Style for the Slider
export const SliderContainer = styled.div`
  position: relative;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  touch-action: none;
  user-select: none;
`;

export const SliderGradient = styled.div.attrs<{ color: Color }>(({ color }) => {
  const transformedToColor = Color(color).hsl();
  const gradientStart = transformedToColor.alpha(0).toString();
  const gradientEnd = transformedToColor.alpha(1).toString();

  return {
    style: {
      background: `linear-gradient(to right, ${gradientStart} -5%, ${gradientEnd} 90%)`,
    },
  };
})<{ color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 4px;
`;
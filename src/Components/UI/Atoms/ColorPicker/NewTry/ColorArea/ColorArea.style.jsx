import styled from 'styled-components';
import { css } from 'styled-components';

export const ColorAreaContainer = styled.div.attrs((props) => ({
  style: {
    background: `linear-gradient(to right, hsl(${props.hue}, 0%, 100%), hsl(${props.hue}, 100%, 50%))`,
  },
}))`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  cursor: crosshair;
`;

export const LightnessGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #000, transparent);
`;

export const Marker = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
`;

export const WrapperColorIndicator = styled.div`
  position: absolute;
  top: ${(props) => props.isActive ? '-105px' : '-25px'};
  width: 70px;
  height: 70px;
  left: 50%;
  transform: ${(props) => props.isActive ? css`translate(-50%) scale(1)` : css`translate(-50%) scale(0)`};
  transition: transform  0.1s ease-in-out, top 0.1s ease-in-out;
  user-select: none;
`;

export const ColorIndicator = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.color.toString(),
  },
}))`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg); 
  box-shadow: 0 0 0 1px rgb(255, 255, 255);
`;

export const WrapperMarker = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  height: 4%;
  aspect-ratio: 1/1;

`;

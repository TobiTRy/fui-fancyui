import Color from "color";
import styled, { css } from "styled-components";

export const WrapperIndicator = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  z-index: 10;
  left: 50%;
  transform: translate(-50%);
  pointer-events: none
`

export const Indicator = styled.div.attrs<{color: Color}>(({color}) => ({

  style: {
    backgroundColor: color,
  },
}))<{isActive: boolean}>`
  background-color: white;
  border-radius: 50% 50% 50% 0;
  box-shadow: 0 0 0 1px rgb(255, 255, 255);
  position: absolute;
  top: ${(props) => props.isActive ? '-105px' : '-40px'};
  width: 100%;
  height: 100%;
  left: 50%;
  transform: ${(props) => props.isActive ? css`translate(-50%) scale(1) rotate(-45deg)` : css`translate(-50%) scale(0)  rotate(-45deg)`};
  user-select: none;
  transition: transform 0.15s ease-in-out, top 0.15s ease-in-out;
`;
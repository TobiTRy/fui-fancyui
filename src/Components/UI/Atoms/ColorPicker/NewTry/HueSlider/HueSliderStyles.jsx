import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 25px;
  background: linear-gradient(
    to right,
    red 0%,
    yellow 17%,
    lime 33%,
    cyan 50%,
    blue 67%,
    magenta 83%,
    red 100%
  );
  cursor: pointer;
`;

export const Marker = styled.div`
  position: absolute;
  top: 50%;
  width: 4px;
  height: 12px;
  background: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  transform: translateY(-50%);
  border-radius: 2px;
`;

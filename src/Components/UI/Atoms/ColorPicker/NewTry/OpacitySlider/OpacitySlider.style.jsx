import styled from 'styled-components';

export const Marker = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 4px;
  height: 12px;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  transform: translateY(-50%);
  border-radius: 2px;
  pointer-events: none;
  touch-action: none;
`;


export const SliderContainer = styled.div.attrs((props) => ({
  style: {
    background: `linear-gradient(
      to right,
      ${props.color.alpha(0).toString()},
      ${props.color.alpha(1).toString()}
    )`,
  },
}))`
  position: relative;
  height: 25px;
  border-radius: 4px;
  cursor: pointer;
  touch-action: none;
`;


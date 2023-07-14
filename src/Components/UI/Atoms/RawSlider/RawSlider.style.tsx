import styled, { css } from 'styled-components';
import { uiColors } from '../../Design/design';

const DragableThumb = css`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: ${uiColors.accent.main};
    cursor: ew-resize;
    box-shadow: 0 0 8px 0 rgba(85, 85, 85, 0.516);
    transition: background 0.1s ease-in-out;
    border: none;
`;

export const StyledRawSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  margin: 0;
  height: 6px;
  margin: 10px 0 12px 0;
  background: gray;
  border-radius: 5px;
  background-image: linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.light});
  background-size: 70% 100%;
  background-repeat: no-repeat;
  outline: none;

  /* Chrome */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${DragableThumb}
  }

  /* Firefox */
  &::-moz-range-thumb {
    ${DragableThumb}
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

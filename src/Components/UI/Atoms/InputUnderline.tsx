import styled, { css } from 'styled-components';
import { colorPalet, uiColors } from '../Design/design';


//the underline for the input fields
const UnderLine = styled.i<{ errorMessage?: string }>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  border-radius: 5px;
  background: gray;
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    width: 100%;
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    height: 100%;
    background: ${({ errorMessage }) =>
      !errorMessage
        ? css`linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.main_light})`
        : css`linear-gradient(90deg, ${colorPalet.red_dark}, ${colorPalet.red_light})`};
    transition: 0.25s;
    transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
`;

//this function generates the state behavior for the underline
export const UnderLineFocusStyle = (Label:any, labelAlign?: 'center' | 'left')=> {
  const calcTransform = labelAlign !== 'center' ? 'translateY(-20px)' : 'translateY(-20px) translate(-50%)';

  return css`
    &:focus ~ ${Label}, &:valid ~ ${Label} {
      color: ${uiColors.accent.main};
      transform: ${calcTransform};
    }

    &:focus ~ ${UnderLine}::before {
      opacity: 1;
    }
  `;
};

export default UnderLine;

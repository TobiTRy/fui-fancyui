import { styled } from 'styled-components';

import { IUiColorsTypes, uiColors } from '../../Design/design';

// --------------------------------------------------------------------------- //
// ------------ A dynamic vertical line for better UX/UI  ------------------ //
// --------------------------------------------------------------------------- //
const FancyVR = styled.hr<{ $design?: IUiColorsTypes }>`
  position: absolute;
  top: 5%;
  bottom: 5%;
  background-color: ${({ $design }) => ($design ? uiColors[$design].main : uiColors.accent[0])};
  display: block;
  width: 1px;
  border-radius: 2px;
  border: 0;
  padding: 0;

  &::after {
    content: '';
    display: block;
    height: 100%;
    background-color: ${({ $design }) => ($design ? uiColors[$design].main : uiColors.accent[0])};
    width: 1px;
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;

export default FancyVR;

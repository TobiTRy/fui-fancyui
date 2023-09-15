import { styled } from 'styled-components';

import { IUiColorsTypes } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

// --------------------------------------------------------------------------- //
// ------------ A dynamic vertical line for better UX/UI  ------------------ //
// --------------------------------------------------------------------------- //
const FancyVR = styled.hr<{ $design?: IUiColorsTypes, theme: TUiColorsType }>`
  position: absolute;
  top: 5%;
  bottom: 5%;
  background-color: ${({ $design, theme }) => ($design ? theme[$design][0] : theme.accent[0])};
  display: block;
  width: 1px;
  border-radius: 2px;
  border: 0;
  padding: 0;

  &::after {
    content: '';
    display: block;
    height: 100%;
    background-color: ${({ $design, theme }) => ($design ? theme[$design].main : theme.accent[0])};
    width: 1px;
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;

export default FancyVR;

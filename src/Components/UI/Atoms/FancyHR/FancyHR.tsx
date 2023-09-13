import { styled } from 'styled-components';

import { IUiColorsTypes } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

// --------------------------------------------------------------------------- //
// ------------ A dynamic horizontal line for better UX/UI  ------------------ //
// --------------------------------------------------------------------------- //
const FancyHR = styled.hr<{ $design?: IUiColorsTypes, theme: TUiColorsType }>`
  width: 100%;
  background-color: ${({ $design, theme }) => ($design ? theme[$design].main : theme.accent[0])};
  display: block;
  height: 1px;
  border-radius: 2px;
  border: 0;
  padding: 0;
  margin: 0;

  &::after {
    content: '';
    display: block;
    width: 100%;
    background-color: ${({ $design, theme }) => ($design ? theme[$design][0] : theme.accent[0])};
    height: 1px;
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;

export default FancyHR;

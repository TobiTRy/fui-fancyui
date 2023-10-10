import { styled } from 'styled-components';

import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';

// --------------------------------------------------------------------------- //
// ------------ A dynamic vertical line for better UX/UI  ------------------ //
// --------------------------------------------------------------------------- //
const FancyVR = styled.hr<{ theme?: TUiColorsType, $themeType?: keyof TUiColorsType, $layer?: TLayer }>`
  position: absolute;
  top: 5%;
  bottom: 5%;
  background-color: ${({ theme, $themeType = 'accent', $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
  display: block;
  width: 1px;
  border-radius: 2px;
  border: 0;
  padding: 0;

  &::after {
    content: '';
    display: block;
    height: 100%;
    background-color: ${({ theme, $themeType = 'accent', $layer }) => getBackgroundColor({ theme, $themeType, $layer })};
    width: 1px;
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;

export default FancyVR;

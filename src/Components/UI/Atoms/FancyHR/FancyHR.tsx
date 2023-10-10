import { styled } from 'styled-components';

import { IUiColorsTypes } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TLayer } from '../../Design/color/generateColorSteps';

// --------------------------------------------------------------------------- //
// ------------ A dynamic horizontal line for better UX/UI  ------------------ //
// --------------------------------------------------------------------------- //
export const FancyHR = styled.hr<{ $themeType?: IUiColorsTypes, theme?: TUiColorsType, $layer?: TLayer }>`
  width: 100%;
  background-color: ${({ $themeType = 'accent', theme, $layer = 0 }) => getBackgroundColor({$themeType, $layer, theme})};
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
    background-color: ${({ $themeType = 'accent', theme, $layer = 0 }) => getBackgroundColor({$themeType, $layer, theme})};
    height: 1px;
    border: 0;
    padding: 0;
    filter: blur(0.5px);
  }
`;

export default FancyHR;

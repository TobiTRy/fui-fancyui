import { css } from 'styled-components';

import { getBackgroundColor } from '../../../../design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponet';
import { IActiveSwitchIndicator } from '../SwitchActiveIndicator';
import { TTheme } from '@/interface/TTheme';

const generateLine = ({ theme, $themeType = 'accent', $layer }: IGenerateLine) => {
  const backgroundColor = getBackgroundColor({ theme, $themeType, $layer });

  return css`
    height: 1.5px;
    background-color: ${backgroundColor};
    border-radius: 10px;
  `;
};

// Define the function to generate an underline for the active indicator
type IGenerateLine = Pick<IActiveSwitchIndicator, '$themeType' | '$layer'> & { theme: TTheme };
export const generateUnderline = ({ theme, $themeType = 'accent', $layer }: IGenerateLine) => {
  // Get the background color for the active indicator
  const line = generateLine({ theme, $themeType, $layer });
  // Return the styled-component CSS for the active indicator
  return css`
    ${line}
    bottom: 0;
    box-sizing: border-box;
  `;
};

export const generateTopline = ({ theme, $themeType = 'accent', $layer }: IGenerateLine) => {
  const line = generateLine({ theme, $themeType, $layer });

  // Return the styled-component CSS for the active indicator
  return css`
    ${line}
    top: 0;
    box-sizing: border-box;
  `;
};

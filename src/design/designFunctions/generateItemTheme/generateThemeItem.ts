import { css } from 'styled-components';

import { disabledStyle } from '@/design/designFunctions/disabledStyle';
import { IGenerateThemeItem } from './IGenerateThemeItemProps.model';
import { generateBorderRadius } from './utils/generateBorderRadius';
import { generateNormal } from './utils/generateNormalStyle';
import { generateOutlined } from './utils/generateOutlinedStyle';

//-----this funktion handles the button style on his conditions-----//
const generateThemeItem = (props: IGenerateThemeItem) => {
  const { $themeType, $outlined, $wide, $borderRadius } = props;

  let iconStyle, aspectRatio;

  //if the button a $outlined generate this, it his a normal generate an normal
  const itemStyle = $outlined && $themeType !== 'transparent' ? generateOutlined(props) : generateNormal(props);

  //this claculates the borderradius depeend on if its a $wide button or not
  const borderRadius = generateBorderRadius({ $wide, $borderRadius, $sizeC: props.$sizeC });

  return css`
    display: inline-flex;
    align-items: center;
    height: fit-content;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    width: ${$wide ? '100%' : 'fit-content'};
    min-width: fit-content;
    border-radius: ${borderRadius};
    transition: all 0.125s ease-in-out;

    ${itemStyle}
    ${iconStyle}
    ${aspectRatio}

    &:disabled {
      ${disabledStyle}
    }
  `;
};

export default generateThemeItem;

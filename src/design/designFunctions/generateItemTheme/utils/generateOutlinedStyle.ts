import Color from 'color';
import { css } from 'styled-components';

import { themeStore } from '@/design/theme/themeStore';
import { IGenerateThemeItem } from '../IGenerateThemeItemProps.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { calcTextColor } from './calcTextColor';

//-----this funktion generates a button that looks like a $outlined button-----//
type IGenerateOutlinedItem = Pick<IGenerateThemeItem, '$themeType' | '$textColor' | '$outlined' | '$layer'>;
export const generateOutlined = (props: IGenerateOutlinedItem) => {
  const { $themeType, $textColor, $outlined, $layer } = props;
  const theme = themeStore.getState().theme;

  const getButtonColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'accent', $layer: $layer });

  //this calculates the texttextColor depend on $themeType and $textColor
  const textColor = calcTextColor({ $textColor, $themeType, $outlined });

  //this makes the textColor, no matther which one transparent
  const backgroundColor = Color(getButtonColor).alpha(0.1).hexa();

  const clacHoverColor = () => {
    if ($textColor) return theme.color[$textColor][1];
    return getButtonColor;
  };

  return css`
    position: relative;
    background-color: transparent;
    border: 1.5px solid ${getButtonColor};
    color: ${textColor};

    &:hover:enabled {
      background-color: ${backgroundColor};
      color: ${clacHoverColor()};
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    }
  `;
};

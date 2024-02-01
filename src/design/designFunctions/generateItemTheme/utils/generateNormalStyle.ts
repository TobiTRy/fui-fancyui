import { css } from 'styled-components';

import { themeStore } from '@/design/theme/themeStore';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { boxShadow } from '@/design/designFunctions/shadows';

import { calcTextColor } from './calcTextColor';
import { generateBackgroundColor } from './generateBackgroundColor';
import { IGenerateThemeItem } from '../IGenerateThemeItemProps.model';

//-----this funktion generates a button that looks like a normal button-----//
type IGenerateNormalitem = Pick<
  IGenerateThemeItem,
  '$themeType' | '$label' | '$hoverColor' | '$textColor' | '$outlined' | '$layer'
>;
export const generateNormal = (props: IGenerateNormalitem) => {
  const { $themeType, $hoverColor, $textColor, $outlined, $layer } = props;
  const theme = themeStore.getState().theme;

  //this calculates the texttextColor depend on $themeType and $textColor
  const textColor = calcTextColor({ $textColor, $themeType, $outlined });

  // generates the hover style for the button
  const hoverBackgroundColorStyle = () => {
    if ($themeType === 'transparent') return 'transparent';
    if ($hoverColor) return theme.colors[$hoverColor][1];
    return getBackgroundColor({ theme, $themeType: $themeType ?? 'accent', $layer: ($layer && $layer + 1) ?? 1 });
  };

  const generatedBackgroundColor = generateBackgroundColor({ $themeType, $layer });

  return css`
    background-color: ${generatedBackgroundColor};
    color: ${textColor};

    &:hover {
      ${$themeType === 'transparent' ? 'color: ' + theme.colors.secondary[1] : ''};
      ${$themeType !== 'transparent' && boxShadow.sm};
      background-color: ${hoverBackgroundColorStyle};
    }
  `;
};

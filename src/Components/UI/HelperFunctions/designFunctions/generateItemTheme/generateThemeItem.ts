import { css } from 'styled-components';
import Color from 'color';

import { disabledStyle } from '../disableStyle';
import { generatePadding } from '../generatePaddingForComponent/generatePadding';
import { borderRadius } from '../../../Design/designSizes';
import { boxShadow } from '../../../Design/shadows';
import themeStore from '../../../Design/color/themeStore';
import { getBackgroundColor } from '../../../Design/color/colorCalculatorForComponet';
import { getOpositColorContrast } from '../getOpositColorContrast';
import { IGenerateThemeItem } from './IGenerateThemeItemProps.model';


// ------------------------------------------------------------------ //
// ---------- Here are the helper functions for the $themeType --------- //
// ------------------------------------------------------------------ //
//this hanles the padding of the button deppend on the $size and if needs a second value
type IcalcTextColor = Pick<IGenerateThemeItem, '$textColor' | '$themeType' | '$outlined'>;
const calcTextColor = ({ $textColor, $themeType, $outlined }: IcalcTextColor) => {
  const theme = themeStore.getState().theme;

  //  if the userer profides a $textColor use this
  if ($textColor) return theme.colors[$textColor][0];
  if ($themeType === 'transparent') return theme.colors.secondary[0];
  if ($outlined) return theme.colors[$themeType ?? 'secondary'][0];

  return getOpositColorContrast($themeType ?? 'secondary');
};

const generateBackgroundColor = (props: Pick<IGenerateThemeItem, '$themeType' | '$layer'>) => {
  const { $themeType, $layer } = props;
  const theme = themeStore.getState().theme;

  if ($themeType === 'transparent') {
    return 'transparent';
  } else {
    return theme.colors[$themeType ?? 'primary'][$layer ?? 0];
  }
};

// -------------------------------------------------------------------------- //
// ---------- Here are the functions to generate the button styles ---------- //
// -------------------------------------------------------------------------- //

//-----this funktion generates a button that looks like a $outlined button-----//
type IGenerateOutlinedItem = Pick<IGenerateThemeItem, '$themeType' | '$textColor' | '$size' | '$label' | '$outlined' | '$layer'>;
const generateOutlined = (props: IGenerateOutlinedItem) => {
  const { $themeType, $textColor, $size, $label, $outlined, $layer } = props;
  const theme = themeStore.getState().theme;

  const getButtonColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'accent', $layer: $layer });

  //reduce the padding with the border $size
  const paddings = generatePadding(-2, Boolean($label));

  //this calculates the texttextColor depend on $themeType and $textColor
  const textColor = calcTextColor({ $textColor, $themeType, $outlined });

  //this makes the textColor, no matther which one transparent
  const backgroundColor = Color(getButtonColor).alpha(0.1).hexa();

  const clacHoverColor = () => {
    if ($textColor) return theme.colors[$textColor][1];
    return getButtonColor;
  };

  return css`
    position: relative;
    background-color: transparent;
    padding: ${paddings[$size]};
    border: 1.5px solid ${getButtonColor};
    color: ${textColor};

    &:hover:enabled {
      background-color: ${backgroundColor};
      color: ${clacHoverColor()};
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    }
  `;
};

//-----this funktion generates a button that looks like a normal button-----//
type IGenerateNormalitem = Pick<
  IGenerateThemeItem,
  '$themeType' | '$size' | '$label' | '$hoverColor' | '$textColor' | '$outlined' | '$layer'
>;
const generateNormal = (props: IGenerateNormalitem) => {
  const { $themeType, $size, $hoverColor, $textColor, $outlined, $layer } = props;
  const theme = themeStore.getState().theme;

  //reduce the padding with the border $size
  const paddings = generatePadding(0, true);

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
    padding: ${paddings[$size]};

    &:hover {
      ${$themeType === 'transparent' ? 'color: ' + theme.colors.secondary[1] : ''};
      ${$themeType !== 'transparent' && boxShadow.sm};
      background-color: ${hoverBackgroundColorStyle};
    }
  `;
};

const generateBorderRadius = (props: Pick<IGenerateThemeItem, '$wide' | '$borderRadius' | '$size'>): string => {
  const { $wide, $borderRadius, $size } = props;
  const borderRadius = themeStore.getState().theme.borderRadius;

  // if border radius is provided use this
  if ($borderRadius) {
    return borderRadius[$borderRadius];
    // if the button is wide use the lg border radius
  } else if ($wide) {
    return borderRadius.lg;
    // else use the $size of the button to calculate the border radius
  } else {
    return borderRadius[$size];
  }
};

//-----this funktion handles the button style on his conditions-----//
const generateThemeItem = (props: IGenerateThemeItem) => {
  const { $themeType, $outlined, $wide, $borderRadius } = props;

  let iconStyle, aspectRatio;

  //if the button a $outlined generate this, it his a normal generate an normal
  const itemStyle = $outlined && $themeType !== 'transparent' ? generateOutlined(props) : generateNormal(props);

  //this claculates the borderradius depeend on if its a $wide button or not
  const borderRadius = generateBorderRadius({ $wide, $borderRadius, $size: props.$size });

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

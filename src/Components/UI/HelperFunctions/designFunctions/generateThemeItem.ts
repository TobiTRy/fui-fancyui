import { css } from 'styled-components';
import Color from 'color';

import { disabledStyle } from './disableStyle';
import { calcIconMarginAndAlign } from './generateIconMargin';
import { generatePadding } from './generatePadding';
import { borderRadius, spacing } from '../../Design/design';
import { IUiColorsTypes } from '../../Design/design';
import IStyledPrefixAndOmiter from '../../Interface/IStyledPrefixAndOmiter.model';
import { boxShadow } from '../../Design/shadows';
import themeStore from '../../Design/color/themeStore';


export type IGenerateThemeItemProps = {
  outlined?: boolean;
  icon?: JSX.Element;
  size: 'sm' | 'md' | 'lg';
  label?: string;
  wide?: boolean;
  design: IUiColorsTypes;
  borderRadius?: keyof typeof borderRadius;
  align?: 'left' | 'right' | 'center';
  color?: 'primary' | 'secondary' | 'accent';
  hoverColor?: 'primary' | 'secondary' | 'accent';
};

export type IGenerateThemeItem = IStyledPrefixAndOmiter<IGenerateThemeItemProps>;

// --------------------------------------------------------------------------- //
// ---------- Here are the $design variants for sizing and alignment --------- //
// --------------------------------------------------------------------------- //
//a shortcut to align the ($icon) ond text
const alignment = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

//this are the values between the $icon and the edge of the button
const paddingIconButton = {
  sm: spacing.md + 'px',
  md: spacing.xl - 4 + 'px',
  lg: spacing.xl + 'px',
};

const theme = themeStore.getState().theme;

// ------------------------------------------------------------------ //
// ---------- Here are the helper functions for the $design --------- //
// ------------------------------------------------------------------ //
//this hanles the padding of the button deppend on the $size and if needs a second value
type IcalcTextColor = Pick<IGenerateThemeItem, '$color' | '$design' | '$outlined'>;
const calcTextColor = ({ $color, $design, $outlined }: IcalcTextColor) => {
  //  if the userer profides a $color use this
  if ($color) return theme[$color][0];
  if ($design === 'transparent') return theme.secondary[0];
  if ($outlined) return theme[$design][0];
  return theme[$design].contrast;
};

const generateBackgroundColor = (props: Pick<IGenerateThemeItem, '$design'>) => {
  const { $design } = props;

  if ($design === 'transparent') {
    return 'transparent';
  } else {
    return theme[$design][0];
  }
};

// -------------------------------------------------------------------------- //
// ---------- Here are the functions to generate the button styles ---------- //
// -------------------------------------------------------------------------- //

//-----this funktion adds to the normal/oulined button a $icon if its needed-----//
type IGenerateIconItem = Pick<IGenerateThemeItem, '$size' | '$align' | '$label'>;
const generateIcon = (props: IGenerateIconItem) => {
  const { $size, $align, $label } = props;

  //this funktion handles the spacing between the $icon and the text deepends on the alignment
  const calcIconButtoonPadding = ({ $align, $size }: Pick<IGenerateThemeItem, '$align' | '$size'>) => {
    if ($align === 'right') {
      return css`
        padding-right: ${paddingIconButton[$size]};
      `;
    } else if ($align === 'left') {
      return css`
        padding-left: ${paddingIconButton[$size]};
      `;
    }
  };
  //this funktion reduces the padding to the edge && makes it look centered

  //this function generates the addons for a $icon button
  return css`
    align-items: center;
    ${$label && calcIconButtoonPadding({ $align, $size })};

    i {
      display: flex;
      align-items: center;
      aspect-ratio: 1/1;
      ${$label && calcIconMarginAndAlign({ $aligned: $align, $size })};
    }
  `;
};

//-----this funktion generates a button that looks like a $outlined button-----//
type IGenerateOutlinedItem = Pick<IGenerateThemeItem, '$design' | '$color' | '$size' | '$label' | '$outlined'>;
const generateOutlined = (props: IGenerateOutlinedItem) => {
  const { $design, $color, $size, $label, $outlined } = props;
  if($design === 'transparent') return;


  console.log($design, $color, $size, $label, $outlined)

  //reduce the padding with the border $size
  const paddings = generatePadding(-2, Boolean($label));

  //this calculates the textcolor depend on $design and $color
  const textColor = calcTextColor({ $color, $design, $outlined });

  //this makes the color, no matther which one transparent
  const backgroundColor = Color(theme[$design][0]).alpha(0.1).hexa() ;

  const clacHoverColor = () => {
    if($color) return theme[$color][1];
    return theme[$design][0];
  }; 


  return css`
    position: relative;
    background-color: transparent;
    padding: ${paddings[$size]};
    border: 1.5px solid ${theme[$design][0]};
    color: ${textColor};

    &:hover:enabled {
      background-color: ${backgroundColor};
      color: ${clacHoverColor()};
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    }
  `;
};

//-----this funktion generates a button that looks like a normal button-----//
type IGenerateNormalitem = Pick<IGenerateThemeItem, '$design' | '$size' | '$label' | '$hoverColor' | '$color' | '$outlined'>;
const generateNormal = (props: IGenerateNormalitem) => {
  const { $design, $size, $label, $hoverColor, $color, $outlined } = props;

  //reduce the padding with the border $size
  const paddings = generatePadding(0, !$label ? false : true);

  //this calculates the textcolor depend on $design and $color
  const textColor = calcTextColor({ $color, $design, $outlined });

  // generates the hover style for the button
  const hoverBackgroundColorStyle = () => {
    if($design === 'transparent') return 'transparent';
    if($hoverColor) return theme[$hoverColor][1];
    return theme[$design][1];
  }


  const generatedBackgroundColor = generateBackgroundColor({ $design });

  return css`
    background-color: ${generatedBackgroundColor};
    color: ${textColor};
    padding: ${paddings[$size]};

    &:hover {
      ${$design === 'transparent' ? 'color: ' + theme.secondary[1] : ''};
      background-color: ${hoverBackgroundColorStyle};
      box-shadow: ${$design !== 'transparent' ? boxShadow.sm : ''};
    }
  `;
};

const generateBorderRadius = (props: Pick<IGenerateThemeItem, '$wide' | '$borderRadius' | '$size'>): string => {
  const { $wide, $borderRadius, $size } = props;
  if ($borderRadius) {
    return borderRadius[$borderRadius];
  } else if ($wide) {
    return borderRadius.lg;
  } else {
    return borderRadius[$size];
  }
};

//-----this funktion handles the button style on his conditions-----//
const generateThemeItem = (props: IGenerateThemeItem) => {
  const { $design ,$outlined, $icon, $size, $label, $wide, $borderRadius, $align } = props;

  let iconStyle, aspectRatio;

  //if the button a $outlined generate this, it his a normal generate an normal
  const itemStyle = $outlined && ($design !== 'transparent') ? generateOutlined(props) : generateNormal(props);

  //this claculates the borderradius depeend on if its a $wide button or not
  const borderRadius = generateBorderRadius({ $wide, $borderRadius, $size });

  //gets the style of a button with a $icon
  if ($icon) iconStyle = generateIcon(props);

  //this makes the button a square (1/1) if there is no $label and a $icon
  if (Boolean(!$label) && $icon) {
    aspectRatio = css`
      aspect-ratio: 1/1;
      justify-content: center;
    `;
  }

  return css`
    display: flex;
    justify-content: ${$align && alignment[$align]};
    align-items: center;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    width: ${$wide ? '100%' : 'initial'};
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

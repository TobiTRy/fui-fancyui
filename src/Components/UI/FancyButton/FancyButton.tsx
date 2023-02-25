import React from "react";
import {
  colorPalet,
  uiColors,
  fontSize,
  borderRadius,
  spacing,
} from "../../../Design/design";

import styled, { css } from "styled-components";
import { hexToTransparent } from "../HelperFunctions/hexToTransparent";
import { generatePadding } from "../HelperFunctions/generatePadding";
import { disabledStyle } from "../HelperFunctions/disableStyle";


interface IFancyButton {
  size: "small" | "medium" | "large";
  wide?: boolean; 
  design: "primary" | "secondary" | "accent" | "transparent";
  align?: "left" | "right" | "center";
  color?: "light" | "dark" | "primary" | "secondary" | "accent";
  hoverColor?: "primary" | "secondary" | "accent";
  label?: string;
  outlined?: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
}

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //

//a shortcut to align the (icon) ond text
const alignment = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

//this are the values between the text and icon
const paddingFromIcon = {
  small:  spacing.xs + 'px',
  medium: spacing.xs + 'px',
  large:  spacing.xs + 'px',
};

//this are the values between the icon and the edge of the button
const paddingIconButton = {
  small:  spacing.md + 'px',
  medium: spacing.xl - 4 + 'px',
  large:  spacing.xl  + 'px',
};


// ------------------------------------------------------------------ //
// ---------- Here are the helper functions for the design ---------- //
// ------------------------------------------------------------------ //


//this hanles the padding of the button deppend on the size and if needs a second value


const calcTextColor = ({ color, design, outlined }: IFancyButton) => {
  if(color) {
    return colorPalet[color];
  } else if(outlined) {
    return uiColors[design].main;
  } else {
    return uiColors[design].contrast;
  }
}

// -------------------------------------------------------------------------- //
// ---------- Here are the functions to generate the button styles ---------- //
// -------------------------------------------------------------------------- //

//-----this funktion adds to the normal/oulined button a icon if its needed-----//
const generateIcon = (props: IFancyButton) => {
  const { size, align, label } = props;

  //this funktion handles the spacing between the icon and the text deepends on the alignment 
  const calcIconButtoonPadding = ({ align, size, }: Pick<IFancyButton, "align" | "size">) => {
    if (align === "right") {
      return css `padding-right: ${paddingIconButton[size]}`;
    } else if(align === "left") {
      return css `padding-left: ${paddingIconButton[size]}`;
    }
  };

  //this funktion reduces the padding to the edge && makes it look centered
  const calcIconPaddingAndAlign = ({ align, size }: Pick<IFancyButton, "align" | "size">) => {
    if (align === "right") {
      return css`
        padding-left: ${paddingFromIcon[size]};
        order: 1;
      `
    } else {
      return css`
        padding-right: ${paddingFromIcon[size]};
      `
    }
  };

  //this function generates the addons for a icon button
  return css`
    align-items: center;
    justify-content: ${align && alignment[align]};
    ${label && calcIconButtoonPadding({ align, size })};

    i {
      display: flex;
      align-items: center;
      ${label && calcIconPaddingAndAlign({ align, size })};
    }

    svg {
      width: 24px;
      height: 24px;
    }
  `;
}


//-----this funktion generates a button that looks like a outlined button-----//
const generateOutlined = (props: IFancyButton) => {
  const { design, color, size, label } = props;

  //reduce the padding with the border size
  const paddings = generatePadding(-2, Boolean(label))

  //this calculates the textcolor depend on design and color
  const textColor = calcTextColor(props)

  //this makes the color, no matther which one transparent
  const backgroundColor = hexToTransparent(uiColors[design].main, 90)

  return css`
    position: relative;
    background-color: transparent;
    padding: ${paddings[size]};
    border: 2px solid ${uiColors[design].main};
    color: ${ textColor };

    &:hover:enabled {
      background-color: ${backgroundColor};
      color: ${ color ? colorPalet[color] : "initinal" };
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    }

    &:disabled {
      ${disabledStyle}
    }

  `;
};

//-----this funktion generates a button that looks like a normal button-----//
const generateNormal = (props: IFancyButton) => {
  const { design, size, label, hoverColor} = props
  
  //reduce the padding with the border size 
  const paddings = generatePadding(0, !label ? false : true)

  //this calculates the textcolor depend on design and color
  const textColor = calcTextColor(props)


  const hoverColorStyle = (design === "transparent" && hoverColor) ? uiColors[hoverColor].main : uiColors[design].hover;

  return css`
    background-color: ${uiColors[design].main};
    color: ${textColor};
    padding: ${paddings[size]};

    &:hover:enabled {
      background-color: ${hoverColorStyle};
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    }

    &:disabled {
      ${disabledStyle}
    }
  `;
};


//-----this funktion handles the button style on his conditions-----//
const generateButton = (props: IFancyButton) => {
  const { outlined, icon, size, label, wide } = props;
  let buttonStyle;
  let buttonIcon;
  let generateBorderRadius;

  //if the button a outlined generate this, it his a normal generate an normal 
  buttonStyle = outlined ? generateOutlined(props) : generateNormal(props);

  //this claculates the borderradius depeend on if its a wide button or not
  generateBorderRadius = wide ? borderRadius!.large : borderRadius[size];

  //gets the style of a button with a icon
  if(icon) buttonIcon = generateIcon(props)

  //check if the button has no label if its true make it completely round
  if(Boolean(!label) && !wide) {
    generateBorderRadius = "50%"
  }

  return css`
    display: flex;
    justify-content: center;
    border: none;
    cursor: pointer;

    width: ${ wide ? "100%" : "initial"};
    font-size: ${fontSize[size]};
    border-radius: ${generateBorderRadius};

    ${buttonStyle}
    ${buttonIcon}
  `;
};


//this creates the button component and hanles the style via generateButton
const Button = styled.button`
  ${(props: IFancyButton) => generateButton(props)}
`;

//the main react component to generate the fancyButton
export default function FancyButton({ ...props }: IFancyButton) {
  const { icon, label } = props;

  return (
    <>
      <Button type="button" {...props}>
        { icon && <i>{icon}</i> }
        { label && <span>{label}</span>}
      </Button>
    </>
  );
}

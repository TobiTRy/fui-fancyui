import React, { useId } from 'react';
import styled, { css } from 'styled-components';

import { spacingPx, uiColors } from '../../Design/design';
import { IFancyTabButtonStyle, IFancyTabStyle } from './IFancyTab.model';

// ------------------------------------------------------------------ //
// ----------- the helperfunctions for the style generate ----------- //
// ------------------------------------------------------------------ //

//generates the style from the dynamic values of the tab
const generateDynamicTabStyle = (props: IFancyTabButtonStyle) => {
  const { transparent, textColor } = props;

  //if the background not transparent give him a background/text color
  if (!transparent) {
    return css`
      background-color: ${uiColors.primary.light};
      color: ${uiColors.primary.contrast};
    `;
  } else {
    //when the it is transparent style it with underline
    return css`
      font-weight: 600;
      color: ${textColor === 'dark' ? uiColors.primary.main : uiColors.primary.contrast};
      background-color: transparent;
      border-bottom: 1.5px solid transparent;
    `;
  }
};

//when the item is aktiv(clicked) this style is used
const generateCheckedStyle = (props: IFancyTabStyle) => {
  const { transparent } = props;
  return css`
    ${!transparent
      ? css`
          &:checked + label {
            text-shadow: 1px 1px 1px black;
            background-color: ${uiColors.accent.main};
          }
        `
      : css`
          &:checked + label {
            color: ${uiColors.accent.main};
            border-bottom: 1.5px solid ${uiColors.accent.main};
          }
        `}
  `;
};


//this functions hold little childs for the label
const generateLabelChilds = (props: IFancyTabStyle) => {
  const { iconAlign } = props;

  return css`
    i {
      display: flex;
      justify-content: center;

      ${iconAlign === 'right'
        ? css`
            padding-left: ${spacingPx.xs};
            order: 1;
          `
        : css`
            padding-right: ${spacingPx.xs};
          `};
    }

    svg {
      width: 24px;
      height: 24px;
    }

    span {
      margin-bottom: 1px;
    }
  `;
};

// ------------------------------------------------------------------ //
// ------------ the main style generator for the li item ------------ //
// ------------------------------------------------------------------ //
const generateButtonStyle = (props: IFancyTabStyle) => {
  return css`
    list-style: none;
    width: ${({ wide }) => wide && `100%`};

    label {
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      width: 100%;
      user-select: none;

      padding: ${({ wide }) => (wide ? `${spacingPx.md} 0px` : `${spacingPx.md}`)};
      //handles the dynamic values
      ${(props) => generateDynamicTabStyle(props)}
      // generates underlying childs in this element
      ${(props) => generateLabelChilds(props)}
    }

    input {
      display: none;
      ${(props: IFancyTabStyle) => generateCheckedStyle(props)}
    }
  `;
};

const LISwitchButtonStyle = styled.li`
  ${generateButtonStyle}
`;

// ------------------------------------------------------------------ //
// ------------- main component for the tab (li item) --------------- //
// ------------------------------------------------------------------ //
export default function FancyTabSwitchButton(props: IFancyTabStyle) {
  const { disabled, itemObject, selected, handler } = props;

  const id = useId();

  return (
    <LISwitchButtonStyle {...props}>
      <input
        id={id + '_' + itemObject.key}
        disabled={disabled}
        name="FancyButtonSwitcher"
        type="radio"
        checked={selected}
        onChange={() => handler(itemObject.key)}
      />

      <label htmlFor={id + '_' + itemObject.key}>
        {itemObject.icon && <i>{itemObject.icon}</i>}
        {itemObject.label && <span>{itemObject.label}</span>}
      </label>
    </LISwitchButtonStyle>
  );
}

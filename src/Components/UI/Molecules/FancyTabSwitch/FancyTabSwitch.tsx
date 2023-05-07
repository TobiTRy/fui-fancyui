import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import FancyTabSwitchButton from './FancyTabSwitchItem';
import IFancyTab, { IFancyTabSwitchStyle } from './IFancyTab.model';

import { borderRadius, spacingPx, uiColors } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/disableStyle';



// ------------------------------------------------------------------ //
// --------- this genreates the UL List with conditions ------------- //
// ------------------------------------------------------------------ //
const ULButtonSwitchList = styled.ul<IFancyTabSwitchStyle>`
  display: ${({ wide }) => (wide ? 'flex' : 'inline-flex')};
  align-items: center;
  padding: 0;
  margin: 0;
  gap: ${({ tabSpacing }) => (tabSpacing ? spacingPx[tabSpacing] : '0')};
  ${({ wide }) => wide && `justify-content: space-around`};

  //this handles the the backgroundcolor and the edge rounding when the backorund is not transparent
  ${({ transparent, rounded, roundedTabs, tabSpacing }) =>
    !transparent &&
    css`
      background-color: ${!tabSpacing ? uiColors.primary.main_light : 'transparent'};

      ${rounded &&
      css`
        border-radius: ${borderRadius[rounded]};

        //if each tab sould not rounded, than round the first and the last item 
        ${!roundedTabs
          ? css`
              li:first-of-type label {
                border-radius: ${borderRadius[rounded]} 0 0 ${borderRadius[rounded]};
              }

              li:last-of-type label {
                border-radius: 0 ${borderRadius[rounded]} ${borderRadius[rounded]} 0;
              }
            `
            //round each label
          : css`
              li label {
                border-radius: ${borderRadius[rounded]};
              }
            `}
      `}
    `}

  //this hanles the disabled style
  ${({ disabled }) => disabled && disabledStyle}
`;



// ------------------------------------------------------------------ //
// ------ the main react component to generate the TabSwitch -------- //
// ------------------------------------------------------------------ //
export default function FancyTabSwitch(props: IFancyTab) {
  const { switchValues, currentSelect, handler, rounded, tabSpacing, ...childValues } = props;

  //the props for the listcomponent
  const listProps = {
    wide: props.wide,
    rounded,
    roundedTabs: props.roundedTabs,
    tabSpacing,
    transparent: props.transparent,
    disabled: props.disabled,
  };

  //the state in which is saved the current sékected tab as sting (key)
  const [currentSelected, setCurrentSelect] = useState(currentSelect);

  //this function handles the current selected tab and sends it to the parent
  const radioChangeHandler = (position: string) => {
    let currentItem = switchValues.find((item) => item.key === position);
    setCurrentSelect(position);
    handler(currentItem?.key!);
  };

  return (
    <div>
      {/* the ul wich is generated on the top of this file  */}
      <ULButtonSwitchList {...listProps}>
        {/* this map generates for each switchvalue a new List item */}
        {switchValues.map((item, i) => (
          <React.Fragment key={i}>
            <FancyTabSwitchButton {...childValues} itemObject={item} selected={item.key === currentSelected} handler={radioChangeHandler} />
          </React.Fragment>
        ))}
      </ULButtonSwitchList>
    </div>
  );
}

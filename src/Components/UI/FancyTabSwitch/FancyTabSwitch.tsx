import React, { useId, useState } from 'react';
import styled, { css } from 'styled-components';

import { uiColors, borderRadius, fontSize, colorPalet } from '../../../Design/design';
import { generatePadding } from '../HelperFunctions/generatePadding';
import { disabledStyle } from '../HelperFunctions/disableStyle';
import { spacing } from '../../../Design/design';


interface IFancyTabSwitch {
  title?: string;
  switchValues: string[];
  currentSelect: string;
  parentCompUpdater: (value: string) => void;
}

interface IFancyTabButton {
  design?: "primary" | "secondary" | "accent" | "transparent";
  handler: (position: string) => void;
  itemValue: string;
  disabled?: boolean;
  textColor?: "bright" | "dark"; 
  transparent?: boolean;
}

type FancyTab = IFancyTabSwitch & Omit<IFancyTabButton, 'itemValue' | 'handler'>;

const generateTransparentLabel = (props: IFancyTabButton) => {
  const { design, transparent, textColor } = props;

  const selectedDesign = design ? design : "primary";
};


const generateDynamicLabelStyle = (props: IFancyTabButton) => {
  const { design, transparent, textColor } = props

  const selectedDesign = design ? design : "primary";
  //colored
  if(!transparent) {
    return css`
      background-color: ${ colorPalet.darkblue_light };
      color: ${ uiColors[selectedDesign].contrast };
    `
  } else {
    return css`
      font-weight: 600;
      color: ${ textColor === "dark" ? uiColors.primary.main : uiColors[selectedDesign].contrast };
      background-color: transparent;
      border-bottom: 1.5px solid transparent;
    `
  }
};

const generateDynamicActiveStyle = (props: IFancyTabButton) => {
  const { design, transparent, textColor } = props;

  if(!transparent) {
    return css` 
      display: none;
    
      &:checked + label {
        text-shadow: 1px 1px 1px black;
        background-color: ${uiColors.accent.main};
        //TODO: ADD EVTL BRIGHT HOVER
      }
    `
  } else {
    return css`
      display: none;

      &:checked + label {
        color: ${uiColors.accent.main};

        border-bottom: 1.5px solid ${uiColors.accent.main};
        //TODO: ADD EVTL BRIGHT HOVERBRIGHT HOVER
      }
      `
  }

} 


const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z"/>
  </svg>
);








  // & :first-of-type {
  //   border-top-left-radius: ${borderRadius.small};
  //   border-bottom-left-radius: ${borderRadius.small};
  // }

  // & :last-of-type {
  //   border-top-right-radius: ${borderRadius.small};
  //   border-bottom-right-radius: ${borderRadius.small};
  // }


  // input {
  // }



const generateButtonStyle = (props: IFancyTabButton) => {
  const { design, transparent, textColor } = props

  const getPadding = generatePadding(0, false)

  return css`
    list-style: none;
    width: 100%;
    padding: ${getPadding.medium};


    label {
      flex: 1;

      text-align: center;
      display: inline-block;
      cursor: pointer;
      user-select: none;
      width: 100%;
      ${(props: IFancyTabButton) => generateDynamicLabelStyle(props)}
    }

    input {
      width: 100%;
      ${(props: IFancyTabButton) => generateDynamicActiveStyle(props)}
    }
  `
}

const LISwitchButtonStyle = styled.li`
  ${(props: IFancyTabButton) => generateButtonStyle(props)}
`; 


const SwitchButton = (props: IFancyTabButton) => {
  const { design, transparent, disabled, itemValue, handler } = props;

  const id = useId();

  const switchHanlder = (value: string) => {
    console.log(value)
  }

  //---Input Handler funktions----//

  return (
    <>
      <input
        id={id + '_' + itemValue}
        disabled={disabled}
        name="FancyButtonSwitcher"
        type="radio"
        checked={itemValue.toString().toLowerCase() === itemValue.toString().toLowerCase()}
        onChange={() => switchHanlder(itemValue)}
      />
      
      <label htmlFor={id + '_' + itemValue}>
        {Icon && <i style={{display: 'flex', justifyContent: 'center'}}>{Icon}</i>}
        <span>{itemValue}</span>
      </label>
    </>
  )
}





const PLabel = styled.div`
  margin-top: 0px;
  margin-bottom: ${spacing.sm} + 'px';
`;

const DIVButtonSwitchList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export default function FancyTabSwitch(props: FancyTab) {
  const { title, switchValues, currentSelect, parentCompUpdater, ...childValues } = props;
  

  const [currentSelected, setCurrentSelect] = useState(currentSelect);


  //---Input Handler funktions----//
  const radioChangeHandler = (position: string) => {
    let currentItem = switchValues.find((item) => item === position);
    setCurrentSelect(position);
    parentCompUpdater(currentItem!);
    console.log()
  };


  return (
    <div>
      {title && <PLabel>{title}</PLabel>}
      <DIVButtonSwitchList>

        {switchValues.map((item, i) => (
          <React.Fragment key={i}>

            <SwitchButton {...childValues} itemValue={item} handler={radioChangeHandler}/>

          </React.Fragment>
        ))}

      </DIVButtonSwitchList>
    </div>
  );
}

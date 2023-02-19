import React, { useId, useState } from 'react';

import { uiColors } from '../../../Design/design';

import styled, { css } from 'styled-components';

interface IFancyTabSwitch {
  title?: string;
  switchValues: string[];
  currentSelect: string;
  disabled?: boolean;
  parentCompUpdater: (value: string) => void;
}



const PLabel = styled.div`
  margin-top: 0px;
  margin-bottom: 8px;
`;



const generateLabelList = (props: IFancyTabSwitch) => {
  const { disabled, title } = props;

  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    & :first-of-type {
      border-radius: 5px 0 0 5px;
      border-right: 1px solid ${uiColors.primary.main};
    }
    & :last-of-type {
      border-radius: 0 5px 5px 0;
      border-left: 1px solid ${uiColors.primary.main};
    }

    label {      
      flex: 1;
      text-align: center;
      display: inline-block;
      background-color: ${disabled ? '#122b36' : uiColors.primary.hover};
      color: ${disabled ? '#797979' : 'white'};
      padding: 8px 11px;
      font-size: 16px;
      cursor: pointer;
      user-select: none;

    }

    input {
      display: none;

      &:checked + label {
        background-color: ${!disabled ? uiColors.accent.main : '#122b36'};
      }
    }

  `;
};

const DIVButtonSwitchList = styled.div`
  ${(props: IFancyTabSwitch) => generateLabelList(props)}
`;

export default function FancyTabSwitch(props: IFancyTabSwitch) {
  const { title, switchValues, currentSelect, disabled, parentCompUpdater } = props;

  const [currentSelected, setCurrentSelect] = useState(currentSelect);
  const id = useId();

  //---Input Handler funktions----
  const radioChangeHandler = (position: string) => {
    let currentItem = switchValues.find((item) => item === position);

    setCurrentSelect(position);
    parentCompUpdater(currentItem!);
  };

  return (
    <>
      {title && <PLabel>{title}</PLabel>}
      <DIVButtonSwitchList {...props}>
        {switchValues.map((item, i) => (
          <React.Fragment key={i}>
            <input
              id={id + '_' + item}
              disabled={disabled}
              name="FancyButtonSwitcher"
              type="radio"
              checked={currentSelected.toString().toLowerCase() === item.toString().toLowerCase()}
              onChange={() => radioChangeHandler(item)}
            />

            <label htmlFor={id + '_' + item}>
              {item}
            </label>
          </React.Fragment>
        ))}
      </DIVButtonSwitchList>
    </>
  );
}

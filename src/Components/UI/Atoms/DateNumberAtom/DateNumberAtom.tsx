import React from 'react';
import styled from 'styled-components';
import { borderRadius, uiColors } from '../../Design/design';

import { disabledStyle } from '../../HelperFunctions/disableStyle';


const StyledDay = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius.complete};
  color: ${uiColors.secondary.main};
  border: none;
  background-color: transparent;
  padding: 0;
  width: 80%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &:hover {
    border: 1px solid ${uiColors.accent.main};
  }

  &:disabled {
    ${disabledStyle}
  }
`;


interface IDay {
  dateNumber: number;
  isWeekend?: boolean;
  disabled?: boolean;
  handler?: () => void;
};
export default function DateNumberAtom({ dateNumber ,isWeekend, disabled, handler }: IDay) {
  const isDisabled = disabled ? disabled : isWeekend ? isWeekend : false

  return (
    <StyledDay disabled={isDisabled} onClick={handler}>
      {dateNumber}
    </StyledDay>
  );
};
import React, { useState } from 'react';
import styled from 'styled-components';
import { borderRadius, uiColors } from '../../Design/design';

import { disabledStyle } from '../../HelperFunctions/disableStyle';


export type IRange = { start?: boolean, end?: boolean, inRange?: boolean}

const StyledDay = styled.button<{range?: IRange, isCurrentDay?: boolean, selected?: boolean}>`
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius.complete};
  color: ${({isCurrentDay}) => isCurrentDay ? uiColors.accent.main : uiColors.secondary.main };
  border: ${({selected}) => selected ? `1px solid ${uiColors.accent.main}` : `none`};
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

  &:active {
    border: 1px solid ${uiColors.accent.main};
  }

  ${({range}) => range?.start && `
    border-radius: 50% 5px 5px 50%;
    background-image: linear-gradient(to right, ${uiColors.accent.main}, transparent);
    color: white;
  `}

  ${({range}) => range?.end && `
    border-radius: 5px 50% 50% 5px;
    background-image: linear-gradient(to left, ${uiColors.accent.main}, transparent);
    color: white;
  `}

  ${({range}) => range?.inRange && `
    background-color: ${uiColors.accent.main};
    color: white;
  `}



  &:disabled {
    ${disabledStyle}
  }
`;

interface IDay {
  dateNumber: number;
  isWeekend?: boolean;
  selected?: boolean;
  disabled?: boolean;
  handler?: () => void;
  range?: IRange;
  isCurrentDay?: boolean;
};
export default function DateNumberAtom({ dateNumber ,isWeekend, disabled, handler, selected, range, isCurrentDay }: IDay) {
  const isDisabled = disabled ? disabled : isWeekend ? isWeekend : false

  return (
    <StyledDay disabled={isDisabled} onClick={handler} range={range} selected={selected} isCurrentDay={isCurrentDay}>
      {dateNumber}
    </StyledDay>
  );
};
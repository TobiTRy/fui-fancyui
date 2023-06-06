import React from 'react'

import DateNumberAtom from '../../Atoms/DateNumberAtom/DateNumberAtom'
import AvilableDot, {IAvilableDot} from '../../Atoms/AvilableDot'
import styled from 'styled-components';
import { spacingPx } from '../../Design/design';

import { IRange } from '../../Atoms/DateNumberAtom/DateNumberAtom';

const StyledDateNumberWithStatus = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacingPx.xs};
  padding: ${spacingPx.xs};
`

interface IDateNumberWithStatus  {
  isAvailable?: IAvilableDot;
  isWeekend?: boolean;
  disabled?: boolean;
  dateNumber: number;
  isSelected?: boolean;
  range?: IRange;
  onClick?: () => void;
};

export default function DateNumberWithStatus(props: IDateNumberWithStatus) {
  const { isAvailable, disabled, dateNumber, isWeekend, isSelected, onClick, range } = props;

  return (
    <StyledDateNumberWithStatus onClick={onClick}>
      <DateNumberAtom dateNumber={dateNumber} disabled={isWeekend || disabled} selected={isSelected} range={range} />
      <AvilableDot avilable={disabled || isWeekend ? 'transparent' : isAvailable!}/>
    </StyledDateNumberWithStatus>
  )
}


import React from 'react'

import DateNumberAtom from '../../Atoms/DateNumberAtom/DateNumberAtom'
import AvilableDot, {IAvilableDot} from '../../Atoms/AvilableDot'
import styled from 'styled-components';
import { spacingPx } from '../../Design/design';


const StyledDateNumberWithStatud = styled.div`
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
};

export default function DateNumberWithStatus(porps:IDateNumberWithStatus) {
  const { isAvailable, disabled, dateNumber, isWeekend} = porps;

  return (
    <StyledDateNumberWithStatud>
      <DateNumberAtom dateNumber={dateNumber} disabled={isWeekend || disabled}/>
      <AvilableDot avilable={disabled || isWeekend ? 'transparent' : isAvailable!} />
    </StyledDateNumberWithStatud>
  )
}


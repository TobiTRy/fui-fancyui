import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import DateOutput from '../../Atoms/DateOutput/DateOutput';
import FancyVR from '../../Atoms/FancyVR/FancyVR';
import { uiColors, spacingPx } from '../../Design/design';

import { useDateOutputFromToState } from './DateOutputFromTo.state';

const StyledDateOutputFromTo = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: stretch;

  button:nth-child(1) {
    border-radius: 50px 0 0 50px;
    color: ${uiColors.secondary.main};
    filter: brightness(1.25);
    padding: ${spacingPx.sm};
  }

  button:nth-child(3) {
    color: ${uiColors.secondary.main};
    filter: brightness(1.25);
    border-radius: 0 50px 50px 0;
    padding: ${spacingPx.sm};
  }
`;

const VRWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center; // this center the FancyVR vertically
`;

// --------------------------------------------------------------------------- //
// --- The date output where the Date is displayed and can select from / to -- //
// --------------------------------------------------------------------------- //
interface IDateOutputFromTo {
  dateFrom?: Date;
  dateTo?: Date;
  handler?: (wich: 'from' | 'to') => void;
  whichIsSelecting?: 'from' | 'to';
}
export default function DateOutputFromTo({ whichIsSelecting ,dateFrom, dateTo, handler }: IDateOutputFromTo) {
  const [currentlySelected, setCurrentlySelected] = useState<'from' | 'to'>('from');


  const handleClickOnDateOutput = (which: 'from' | 'to') => {
    setCurrentlySelected(which);
    handler && handler(which);
  };

  useEffect(() => {
    if(whichIsSelecting) {
      setCurrentlySelected(whichIsSelecting);
    }
  }, [whichIsSelecting])


  return (
    <StyledDateOutputFromTo>
      <DateOutput
        date={dateFrom}
        isActive={currentlySelected === 'from' || currentlySelected === undefined}
        handler={() => handleClickOnDateOutput('from')}
      />
      <VRWrapper>
        <FancyVR $design="secondary" />
      </VRWrapper>
      <DateOutput date={dateTo ?? dateFrom} isActive={currentlySelected === 'to'} handler={() => handleClickOnDateOutput('to')} />
    </StyledDateOutputFromTo>
  );
}

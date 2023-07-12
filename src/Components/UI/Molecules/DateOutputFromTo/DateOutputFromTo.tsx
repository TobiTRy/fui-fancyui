import React from 'react'

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
  align-items: stretch; // added this line

  button:nth-child(1) {
    border-radius: 50px 0 0 50px;
    color: ${uiColors.secondary.main};
    filter: brightness(1.25);
    padding:  ${spacingPx.sm};
  }

  button:nth-child(3) {
    color: ${uiColors.secondary.main};
    filter: brightness(1.25);
    border-radius: 0 50px 50px 0;
    padding:  ${spacingPx.sm};
  }
`;

const VRWrapper = styled.div`
  position: relative; // added this line
  flex: 1; // added this line
  display: flex;
  align-items: center; // this should center the FancyVR vertically
`;

// --------------------------------------------------------------------------- //
// --- The date output where the Date is displayed and can select from / to -- //
// --------------------------------------------------------------------------- //
interface IDateOutputFromTo {
  dateFrom?: Date;
  dateTo?: Date;
  whichIsSelecting?: 'from' | 'to';
};
//TODO: whichIsSelecting is not set build in useEffect
export default function DateOutputFromTo({dateFrom, dateTo, whichIsSelecting}: IDateOutputFromTo) {
  const currentlySelected = useDateOutputFromToState(state => state.currentlySelected);
  const setCurrentlySelected = useDateOutputFromToState(state => state.setCurrentlySelected);

  // useEffect(() => {
  //   setCurrentlySelected(whichIsSelecting)
  // }, [whichIsSelecting])
  
  
  const handleClickOnDateOutput = (which: 'from' | 'to') => {
    setCurrentlySelected(which);
  }

  return (
    <StyledDateOutputFromTo>
      <DateOutput date={dateFrom} isActive={currentlySelected === 'from' || currentlySelected === undefined} handler={() => handleClickOnDateOutput('from')}/>
      <VRWrapper>
        <FancyVR $design="secondary" />
      </VRWrapper>
      <DateOutput date={dateTo ?? dateFrom } isActive={currentlySelected === 'to'} handler={() => handleClickOnDateOutput('to')}/>
    </StyledDateOutputFromTo>
  )
}

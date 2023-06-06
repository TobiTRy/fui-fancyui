import React from 'react'

import styled from 'styled-components';

import DateOutput from '../../Atoms/DateOutput/DateOutput';

import { uiColors, spacingPx, colorPalet } from '../../Design/design';

const StyledDateOutputFromTo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;


  button:nth-child(1) {
    color: white;
    border-radius: 50px 0 0 50px;
    padding:  ${spacingPx.sm};
    background-color: ${colorPalet.darkblue_dark};
  }

  button:nth-child(2) {
    color: ${uiColors.secondary.main};
    filter: brightness(1.25);
    border-radius: 0 50px 50px 0;
    padding:  ${spacingPx.sm};
    background-color: ${colorPalet.darkblue_light};
  }

`;

interface IDateOutputFromTo {
  dateFrom: Date;
  dateTo: Date;
};
export default function DateOutputFromTo({dateFrom, dateTo}: IDateOutputFromTo) {


  return (
    <StyledDateOutputFromTo>
      <DateOutput date={dateFrom} />
      <DateOutput date={dateTo ?? dateFrom } />
    </StyledDateOutputFromTo>
  )
}

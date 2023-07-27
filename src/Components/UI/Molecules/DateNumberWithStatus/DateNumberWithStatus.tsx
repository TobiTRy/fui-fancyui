import React from 'react';
import styled from 'styled-components';

import DateNumberAtom from '../../Atoms/DateNumberAtom/DateNumberAtom';
import AvilableDot, { IAvilableDot } from '../../Atoms/AvilableDot/AvilableDot';
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
`;

interface IDateNumberWithStatus {
  isAvailable?: IAvilableDot;
  disabled?: boolean;
  dateNumber: number;
  isSelected?: boolean;
  isCurrentDay?: boolean;
  range?: IRange;
  onClick?: () => void;
}
export default function DateNumberWithStatus(props: IDateNumberWithStatus) {
  const { isAvailable, disabled, dateNumber, isSelected, onClick, range, isCurrentDay } = props;

  return (
    <StyledDateNumberWithStatus onClick={onClick}>
      <DateNumberAtom dateNumber={dateNumber} disabled={disabled} selected={isSelected} isCurrentDay={isCurrentDay} range={range} />
      <AvilableDot $avilable={disabled ? 'transparent' : isAvailable!} />
    </StyledDateNumberWithStatus>
  );
}

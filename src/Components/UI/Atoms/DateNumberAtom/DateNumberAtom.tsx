import React from 'react';
import { StyledDay } from './DateNumberAtom.style';
import Typography from '../Typography/Typography';

export type IRange = { start?: boolean; end?: boolean; inRange?: boolean };

interface IDay {
  dateNumber: number;
  isWeekend?: boolean;
  selected?: boolean;
  disabled?: boolean;
  handler?: () => void;
  range?: IRange;
  isCurrentDay?: boolean;
}
export default function DateNumberAtom({ dateNumber, isWeekend, disabled, handler, selected, range, isCurrentDay }: IDay) {
  const isDisabled = disabled ? disabled : isWeekend ? isWeekend : false;

  return (
    <StyledDay $range={range} $selected={selected} $isCurrentDay={isCurrentDay} disabled={isDisabled} onClick={handler}>
      <Typography type="content" variant='label'>
        {dateNumber}
      </Typography>
    </StyledDay>
  );
}

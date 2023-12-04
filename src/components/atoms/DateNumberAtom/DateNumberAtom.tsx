import React from 'react';

import { StyledDay } from './DateNumberAtom.style';
import { Typography } from '@/components/atoms/Typography';
import { IDateNumberAtom } from './IDateNumberAtom.model';

// --------------------------------------------------------------------------- //
// -------- The DateNumberAtom Displays the date number of a clendar --------- //
// --------------------------------------------------------------------------- //
export default function DateNumberAtom(props: IDateNumberAtom) {
  const { dateNumber, selected, disabled, onClick, range, isCurrentDay, themeType, layer } = props;

  return (
    <StyledDay
      $range={range}
      $selected={selected}
      $isCurrentDay={isCurrentDay}
      disabled={disabled}
      onClick={onClick}
      $themeType={themeType}
      $layer={layer}
    >
      <Typography type="content" variant="label">
        {dateNumber}
      </Typography>
    </StyledDay>
  );
}

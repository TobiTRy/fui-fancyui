import React from 'react';
import { StyledDay } from './DateNumberAtom.style';
import Typography from '../Typography/Typography';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';

export type IRange = { start?: boolean; end?: boolean; inRange?: boolean };

interface IDay {
  dateNumber: number;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  range?: IRange;
  isCurrentDay?: boolean;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// -------- The DateNumberAtom Displays the date number of a clendar --------- //
// --------------------------------------------------------------------------- //
export default function DateNumberAtom(props: IDay) {
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

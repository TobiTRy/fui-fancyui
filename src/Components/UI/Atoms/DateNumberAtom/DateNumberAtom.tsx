import React from 'react';
import { StyledDay } from './DateNumberAtom.style';
import Typography from '../Typography/Typography';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

export type IRange = { start?: boolean; end?: boolean; inRange?: boolean };

interface IDay {
  dateNumber: number;
  isWeekend?: boolean;
  selected?: boolean;
  disabled?: boolean;
  handler?: () => void;
  range?: IRange;
  isCurrentDay?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
export default function DateNumberAtom(props: IDay) {
  const { dateNumber, isWeekend, selected, disabled, handler, range, isCurrentDay, themeType, layer } = props;

  const isDisabled = disabled ? disabled : isWeekend ? isWeekend : false;

  return (
    <StyledDay
      $range={range}
      $selected={selected}
      $isCurrentDay={isCurrentDay}
      disabled={isDisabled}
      onClick={handler}
      $themeType={themeType}
      $layer={layer}
    >
      <Typography type="content" variant="label">
        {dateNumber}
      </Typography>
    </StyledDay>
  );
}

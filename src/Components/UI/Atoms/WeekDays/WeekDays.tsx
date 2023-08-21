import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

import { spacingPx, uiColors } from '../../Design/design';
import Typography from '../Typography/Typography';

const WeekdaysConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  margin-bottom: ${spacingPx.xs};
  color: ${uiColors.secondary.main};

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
// --------------------------------------------------------------------------- //
// ---------- This Atom creates a List of all Weekdas from Mo - Su ----------- //
// --------------------------------------------------------------------------- //
export default function WeekDays() {
  const [weekdays, setWeekdays] = useState<string[]>([]);

  useEffect(() => {
    const days = [];
    for (let i = 5; i <= 11; i++) {
      const day = new Date(1970, 0, i);
      days.push(day.toLocaleString(navigator.language, { weekday: 'short' }).slice(0, 2));
    }
    setWeekdays(days);
  }, []);

  return (
    <WeekdaysConatiner>
      {weekdays.map((day) => (
        <Typography type="label" key={day}>
          {day}
        </Typography>
      ))}
    </WeekdaysConatiner>
  );
}

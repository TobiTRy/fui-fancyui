'use client';

import { useEffect, useState } from 'react';

import { Typography } from '@/components/atoms/Typography';
import { TWeekDays } from '@/components/atoms/WeekDays/TWeekdays.model';
import { WeekdaysConatiner } from '@/components/atoms/WeekDays/Weekdays.style';

import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ---------- This Atom creates a List of all Weekdas from Mo - Su ----------- //
// --------------------------------------------------------------------------- //
export default function WeekDays(props: TWeekDays) {
  const { themeType, layer, sizeC = 'md', border = 'bottom', startWeekOn = 1 } = props;

  const [weekdays, setWeekdays] = useState<string[]>([]);

  useEffect(() => {
    const days = [];
    // Calculate the starting date based on the startDay prop
    const startDate = new Date(1970, 0, (startWeekOn + 4) % 7);
    for (let i = 0; i < 7; i++) {
      const day = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      days.push(day.toLocaleString(navigator.language, { weekday: 'short' }).slice(0, 2));
    }
    setWeekdays(days);
  }, [startWeekOn]); // Depend on startDay so it recalculates when startDay changes

  return (
    <WeekdaysConatiner $themeType={themeType} $layer={layer} $border={border}>
      {weekdays.map((day) => (
        <Typography variant={sizeSettings[sizeC].fontSize} key={day}>
          {day}
        </Typography>
      ))}
    </WeekdaysConatiner>
  );
}

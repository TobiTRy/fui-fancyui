import { useEffect, useState } from 'react';

import { Typography } from '@/components/atoms/Typography';
import { TWeekDays } from '@/components/atoms/WeekDays/TWeekdays.model';
import { WeekdaysConatiner } from '@/components/atoms/WeekDays/Weekdays.style';

import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ---------- This Atom creates a List of all Weekdas from Mo - Su ----------- //
// --------------------------------------------------------------------------- //
export default function WeekDays(props: TWeekDays) {
  const { themeType, layer, sizeC = 'md' } = props;

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
    <WeekdaysConatiner $themeType={themeType} $layer={layer}>
      {weekdays.map((day) => (
        <Typography variant={sizeSettings[sizeC].fontSize} key={day}>
          {day}
        </Typography>
      ))}
    </WeekdaysConatiner>
  );
}

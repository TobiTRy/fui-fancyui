'use client';

import { useEffect, useMemo, useState } from 'react';

import { Typography } from '@/components/atoms/Typography';

import { sizeSettings } from './sizeSettings';
import { DateOutputButton } from './DateOutput.style';
import { TDateOutputWithNativeAtrrs } from './TDateOutput.model';

// --------------------------------------------------------------------------- //
// -------------- The Dateoutput displays a selected date -------------------- //
// --------------------------------------------------------------------------- //
export default function DateOutput(props: TDateOutputWithNativeAtrrs) {
  const {
    date,
    isActive,
    themeType = 'primary',
    layer,
    onClick,
    textCustom,
    sizeC = 'md',
    borderRadius,
    ...htmlProps
  } = props;

  const [active, setActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Format the date to display as "6. Juni"
  const formattedDateWithText = useMemo(() => {
    if (!selectedDate) return '';
    const userLang = navigator.language;
    const options = { day: 'numeric', month: 'short' } as const;
    const formattedDate = selectedDate.toLocaleDateString(userLang, options);

    return `${textCustom?.selected ?? ''} ${formattedDate}`;
  }, [selectedDate, textCustom]);

  const handleOpenCalendar = () => {
    setActive(true);
    onClick && onClick();
  };

  useEffect(() => {
    setSelectedDate(date);
  }, [date]);

  useEffect(() => {
    setActive(isActive ?? false);
  }, [isActive]);

  return (
    <DateOutputButton
      $sizeC={sizeC}
      $borderRadius={borderRadius}
      onClick={handleOpenCalendar}
      $themeType={themeType}
      $layer={layer}
      $isActive={active && isActive}
      aria-label={formattedDateWithText || textCustom?.notSelected}
      {...htmlProps}
    >
      <Typography variant={sizeSettings[sizeC].fontSize} fontWeight={isActive ? 'bold' : undefined} lineHeight={1}>
        {formattedDateWithText || textCustom?.notSelected || 'Select a date'}
      </Typography>
    </DateOutputButton>
  );
}

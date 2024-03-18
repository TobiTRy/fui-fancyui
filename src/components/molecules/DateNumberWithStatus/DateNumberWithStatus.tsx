import { AvilableDot } from '@/components/atoms/AvilableDot';
import { DateNumberAtom } from '@/components/atoms/DateNumberAtom';

import { StyledDateNumberWithStatus } from './DateNumberWithStatus.style';
import { TDateNumberWithStatus } from './TDateNumberWithStatus.model';

// --------------------------------------------------------------------------- //
//A Simple Number with the AvilableDot to indicate something is busy or free...//
// --------------------------------------------------------------------------- //
export default function DateNumberWithStatus(props: TDateNumberWithStatus) {
  const {
    isAvailable,
    disabled,
    dateNumber,
    isSelected,
    onClick,
    range,
    isCurrentDay,
    layer = 0,
    themeType = 'secondary',
    externalStyle,
    ...htmlProps
  } = props;

  return (
    <StyledDateNumberWithStatus $externalStyle={externalStyle} {...htmlProps}>
      <DateNumberAtom
        dateNumber={dateNumber}
        disabled={disabled}
        selected={isSelected}
        isCurrentDay={isCurrentDay}
        range={range}
        layer={layer}
        themeType={themeType}
        onClick={onClick}
      />
      <AvilableDot $available={disabled ? 'transparent' : isAvailable} />
    </StyledDateNumberWithStatus>
  );
}

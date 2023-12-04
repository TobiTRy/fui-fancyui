import { styled } from 'styled-components';

import DateNumberAtom from '@/components/atoms/DateNumberAtom/DateNumberAtom';
import AvilableDot from '@/components/atoms/AvilableDot/AvailableDot';
import { IAvailableDot } from '@/components/atoms/AvilableDot';

import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TTheme } from '@/interface/TTheme';
import { IRange } from '@/components/atoms/DateNumberAtom/IDateNumberAtom.model';

interface IDateNumberWithStatus {
  isAvailable?: IAvailableDot;
  disabled?: boolean;
  dateNumber: number;
  isSelected?: boolean;
  isCurrentDay?: boolean;
  range?: IRange;
  onClick?: () => void;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
//A Simple Number with the AvilableDot to indicate something is busy or free...//
// --------------------------------------------------------------------------- //
export default function DateNumberWithStatus(props: IDateNumberWithStatus) {
  const { isAvailable, disabled, dateNumber, isSelected, onClick, range, isCurrentDay, layer, themeType } = props;

  return (
    <StyledDateNumberWithStatus onClick={onClick}>
      <DateNumberAtom
        dateNumber={dateNumber}
        disabled={disabled}
        selected={isSelected}
        isCurrentDay={isCurrentDay}
        range={range}
        layer={layer}
        themeType={themeType}
      />
      <AvilableDot $available={disabled ? 'transparent' : isAvailable} />
    </StyledDateNumberWithStatus>
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const StyledDateNumberWithStatus = styled.div<{ theme: TTheme }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};
`;

import { styled } from 'styled-components';

import { DateNumberAtom } from '@/components/atoms/DateNumberAtom';
import { AvilableDot } from '@/components/atoms/AvilableDot';
import { IAvailableDot } from '@/components/atoms/AvilableDot';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { IRange } from '@/components/atoms/DateNumberAtom/IDateNumberAtom.model';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

interface IDateNumberWithStatus {
  isAvailable?: IAvailableDot;
  disabled?: boolean;
  dateNumber: number;
  isSelected?: boolean;
  isCurrentDay?: boolean;
  range?: IRange;
  onClick?: () => void;
  themeType?: TThemeTypesNotTransparent;
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

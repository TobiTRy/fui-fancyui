import React from 'react';
import { styled } from 'styled-components';

import DateNumberAtom from '../../Atoms/DateNumberAtom/DateNumberAtom';
import AvilableDot, { IAvailableDot } from '../../Atoms/AvilableDot/AvailableDot';
import { spacingPx } from '../../Design/design';
import { IRange } from '../../Atoms/DateNumberAtom/DateNumberAtom';
import { TLayer } from '../../Design/color/generateColorSteps';
import { TUiColorsType } from '../../Design/color/designColor';

const StyledDateNumberWithStatus = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacingPx.xs};
  padding: ${spacingPx.xs};
`;

interface IDateNumberWithStatus {
  isAvailable?: IAvailableDot;
  disabled?: boolean;
  dateNumber: number;
  isSelected?: boolean;
  isCurrentDay?: boolean;
  range?: IRange;
  onClick?: () => void;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
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
      <AvilableDot $available={disabled ? 'transparent' : isAvailable!} />
    </StyledDateNumberWithStatus>
  );
}

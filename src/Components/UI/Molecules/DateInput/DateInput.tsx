import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { css, styled } from 'styled-components';

import RawInput from '../../Atoms/RawInput/RawInput';
import { TRawInputAlign } from '../../Atoms/RawInput/RawInput';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { simpleColorTransition } from '../../Design/simpleTransition';
import { TUiColorsType } from '../../Design/color/designColor';

type IStyledDatePicker = IStyledPrefixAndPicker<IDateInputProps, 'align'> & { value?: string };
const StyledDatePicker = styled(RawInput)<IStyledDatePicker & { theme: TUiColorsType }>`
  color: ${({ value }) => (value ? '' : 'transparent')};

  &:focus {
    color: ${({ theme }) => theme.secondary[0]};
  }

  &::-webkit-calendar-picker-indicator {
    ${simpleColorTransition}

    ${({ theme }) =>
      css`
        background-image: ${`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="${theme.secondary[4].replace(
          '#',
          '%23'
        )}" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>')`};
      `};
  }
`;

export interface IDateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value?: string;
  activeHandler?: (value: boolean) => void;
  align?: TRawInputAlign;
  type?: 'week' | 'date' | 'month' | 'time' | 'datetime-local' | 'datetime';
}
// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function DateInput(props: IDateInputProps) {
  const { value, activeHandler, align, type, ...htmlInputProps } = props;

  return (
    <StyledDatePicker
      $align={align}
      type={type || 'date'}
      value={value}
      required
      onFocus={() => activeHandler && activeHandler(true)}
      onBlur={() => activeHandler && activeHandler(false)}
      {...htmlInputProps}
    />
  );
}

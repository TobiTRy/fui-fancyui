import React, { HTMLAttributes } from 'react';
import { SelectField } from './DropDownSelect.style';

export interface IDropDownSelect extends Omit<HTMLAttributes<HTMLSelectElement>, 'type'> {
  align?: 'left' | 'center';
  values?: string[];
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  emptySelect?: boolean;
  children?: React.ReactNode;
  activeHandler?: (value: boolean) => void;
}
// ------------------------------------------------------------------ //
// ---------------- the blank drop down select ---------------------- //
// ------------------------------------------------------------------ //
export default function DropDownSelect(props: IDropDownSelect) {
  const { values, value, placeholder, children, align, onChange, activeHandler, emptySelect, ...htmlInputProps } = props;

  return (
    <SelectField
      $align={align}
      $labelAlign={align}
      value={value || ''}
      onChange={onChange}
      onFocus={() => activeHandler && activeHandler(true)}
      onBlur={() => activeHandler && activeHandler(false)}
      {...htmlInputProps}
    >
      {/* Placeholder option */}
      {placeholder && (
        <option key="-2" value="">
          {placeholder}
        </option>
      )}

      {/* Empty Select Option  */}
      {emptySelect && (
        <option key="-1" value="" disabled>
          {''}
        </option>
      )}
      {/* Children */}

      {values?.map((item, i) => (
        <option key={i} value={item.toString().toLowerCase()}>
          {item}
        </option>
      ))}

      {children}
    </SelectField>
  );
}

import React, { HTMLAttributes } from 'react';
import { SelectField, Option } from './DropDownSelect.style';

export interface IDropDownSelect extends Omit<HTMLAttributes<HTMLSelectElement>, 'type'> {
  align?: 'left' | 'center';
  values?: string[];
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  emptySelect?: boolean;
  activeHandler?: (value: boolean) => void;
}
// ------------------------------------------------------------------ //
// ---------------- the blank drop down select ---------------------- //
// ------------------------------------------------------------------ //
export default function DropDownSelect(props: IDropDownSelect) {
  const { values, value, placeholder, align, onChange, activeHandler, emptySelect, ...htmlInputProps } = props;

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
        <Option key="-2" value="" $align={align}>
          {placeholder}
        </Option>
      )}

      {/* Empty Select Option  */}
      {emptySelect && (
        <Option key="-1" value="" $align={align} disabled>
          {''}
        </Option>
      )}

      {values?.map((item, i) => (
        <Option key={i} value={item.toString().toLowerCase()} $align={align}>
          {item}
        </Option>
      ))}
    </SelectField>
  );
}

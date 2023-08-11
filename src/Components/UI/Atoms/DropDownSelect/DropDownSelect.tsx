import React from 'react';
import { SelectField, Option } from './DropDownSelect.style';
import { ChangeEvent } from 'react';



export interface IDropDownSelect {
  id?: string;
  align?: 'left' | 'center';
  value?: string;
  values?: string[];
  name?: string;
  disabled?: boolean;
  emptySelect?: boolean;
  ariaLabel?: string;
  handler?: (e: ChangeEvent<HTMLSelectElement>) => void;
  activeHandler?: (value: boolean) => void;
}
// ------------------------------------------------------------------ //
// ---------------- the blank drop down select ---------------------- //
// ------------------------------------------------------------------ //

export default function DropDownSelect(props: IDropDownSelect) {
  const { id, value, values, name, align, handler, disabled, activeHandler, emptySelect, ariaLabel } = props;

  
  return (
    <SelectField
      $align={align}
      $labelAlign={align}
      aria-label={ariaLabel}
      id={id}
      name={name}
      disabled={disabled}
      value={value ? value : ''}
      required
      onInput={handler}
      onFocus={() => activeHandler && activeHandler(true)}
      onBlur={() => activeHandler && activeHandler(false)}
    >
      {/* Empty Select Option  */}
      {emptySelect && (
        <Option key="-1" value="" $align={align}>
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

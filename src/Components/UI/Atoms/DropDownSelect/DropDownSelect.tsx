import React from 'react';
import { SelectField, Option } from './DropDownSelect.style';
import { ChangeEvent } from 'react';



export interface IDropDownSelect {
  id?: string;
  align?: 'left' | 'center';
  selectedValue?: string;
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
  const { id, selectedValue, values, name, align, handler, disabled, activeHandler, emptySelect, ariaLabel } = props;

  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  
  return (
    <SelectField
      $align={align}
      $labelAlign={align}
      aria-label={ariaLabel}
      id={id}
      name={name}
      disabled={disabled}
      value={selectedValue ? selectedValue : ''}
      required
      onInput={handler}
      onFocus={() => focusHandler(true)}
      onBlur={() => focusHandler(false)}
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

import React from 'react';
import { SelectField, Option } from './DropDownSelect.style';
import IDropDownSelect from './DropDownSelect.model';

// ------------------------------------------------------------------ //
// ---------------- the blank drop down select ---------------------- //
// ------------------------------------------------------------------ //

export default function DropDownSelect(props: IDropDownSelect) {
  const { id, value, values, name, align, handler, disabled, activeHandler, emptySelect, ariaLabel } = props;

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
      value={value ? value : ''}
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
        <React.Fragment key={i}>
          <Option value={item.toString().toLowerCase()} $align={align}>
            {item}
          </Option>
        </React.Fragment>
      ))}
    </SelectField>
  );
}

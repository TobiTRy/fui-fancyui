import React from 'react';
import { SelectField, Option } from './DropDownSelect.style';
import IDropDownSelect from './DropDownSelect.model';

// ------------------------------------------------------------------ //
// ---------------- the blank drop down select ---------------------- //
// ------------------------------------------------------------------ //
export default function DropDownSelect(props: IDropDownSelect) {
  const { id, value, values, name, align, handler, disabled, activeHandler, emptySelect } = props;

  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  return (
    <SelectField
      $align={align}
      $labelAlign={align}
      id={id}
      name={name}
      disabled={disabled}
      value={value ? value : ''}
      required
      onChange={handler}
      onFocus={() => focusHandler(true)}
      onBlur={() => focusHandler(false)}
    >
      
      <Option value="" hidden className="disabled" $align={align} disabled>
        {' '}
      </Option>
      
      {/* Empty Select Option  */}
      {emptySelect && (
        <Option value="" $align={align}>
          {''}
        </Option>
      )}

      {/* placeholder for custom text like "Please Select a item" */}
      {values?.map((item, i) => (
        <Option key={i} value={item.toString().toLowerCase()} $align={align}>
          {item}
        </Option>
      ))}
    </SelectField>
  );
}

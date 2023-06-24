import React from 'react';
import { SelectField, Option } from './DropDownSelect.style';
import IDropDownSelect from './DropDownSelect.model';

// ------------------------------------------------------------------ //
// ---------------- the blank drop down select ---------------------- //
// ------------------------------------------------------------------ //
export default function DropDownSelect(props: IDropDownSelect) {
  const { id, selected, values, align, handler, disabled, activeHandler } = props;

  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  return (
    <SelectField
      id={id}
      disabled={disabled}
      align={align}
      labelAlign={align}
      defaultValue={selected ? selected : ''}
      required
      onChange={handler}
      onFocus={() => focusHandler(true)}
      onBlur={() => focusHandler(false)}
    >
      {/* Empty Select Option */}
      <Option value="" hidden className="disabled" align={align} disabled>
        {' '}
      </Option>

      {/* placeholder for custom text like "Please Select a item" */}
      {values?.map((item, i) => (
        <Option key={i} value={item.toString().toLowerCase()} align={align}>
          {item}
        </Option>
      ))}
    </SelectField>
  );
}

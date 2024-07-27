'use client';

import { TDropDownSelect, TDropDownSelectNativeAttrs } from '@/components/atoms/DropDownSelect/TDropDownSelect.model';
import { SelectField } from './DropDownSelect.style';
import { forwardRef } from 'react';

// ------------------------------------------------------------------ //
// ---------------- the blank drop down select ---------------------- //
// ------------------------------------------------------------------ //
const DropDownSelect = forwardRef<HTMLSelectElement, TDropDownSelect & TDropDownSelectNativeAttrs>((props, ref) => {
  const { values, value, placeholder, children, align = 'left', emptySelect = true, ...htmlInputProps } = props;

  return (
    <SelectField ref={ref} $align={align} $labelAlign={align} value={value || ''} {...htmlInputProps}>
      {/* Placeholder option */}
      {/* Empty Select Option  */}
      {emptySelect && (
        <option key="-1" value="" disabled>
          {''}
        </option>
      )}

      {placeholder && (
        <option key="-2" value="">
          {placeholder}
        </option>
      )}

      {/* Children */}
      {values?.map((item, i) => {
        if (typeof item === 'string') {
          return (
            <option key={i} value={item.toLocaleLowerCase()}>
              {item}
            </option>
          );
        }
        return (
          <option key={i} value={item.key}>
            {item.value}
          </option>
        );
      })}

      {children}
    </SelectField>
  );
});

export default DropDownSelect;

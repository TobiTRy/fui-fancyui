import React, { useId, useState } from 'react';
import { Icon, SelectContainer, SelectField, Option} from './FancyDropDownSelect.style';

import UnderLine from '../../Atoms/InputUnderline';

import InputWarapper from '../../Atoms/InputWrapper/InputWrapper';
import IFancyDropDownSelect from './IFancyDropDownSelect.model';
import { AnimatedInputLabel } from '../../Atoms/AnimatedLabel';

// ------------------------------------------------------------------ //
// ------------- main component for the drop down ------------------- //
// ------------------------------------------------------------------ //
export default function FancyDropDownSelect(props: IFancyDropDownSelect) {
  const { label, selected, options, labelAlign, inputTextAlign, icon, onChange, disabled } = props;

  const id = useId();

  //this state switches when the input is focused
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <InputWarapper disabled={disabled}>
        {icon && <Icon active={isActive}>{icon}</Icon>}
        <SelectContainer givePadding={Boolean(label)}>
          <SelectField
            id={id}
            disabled={disabled}
            align={inputTextAlign}
            labelAlign={labelAlign}
            defaultValue={selected ? selected : ''}
            required
            onChange={onChange}
            onBlur={() => setIsActive(false)}
            onFocus={() => setIsActive(true)}
          >
            <Option value="" hidden className="disabled" align={inputTextAlign} disabled>
              {' '}
            </Option>

            {/* placeholder for costome text like "Please Select a item" */}
            {options?.map((item, i) => (
              <Option key={i} value={item.toString().toLowerCase()} align={inputTextAlign}>
                {item}
              </Option>
            ))}
          </SelectField>

          {label && (
            <AnimatedInputLabel htmlFor={id} disabledAndSelected={Boolean(disabled) && Boolean(selected)} align={labelAlign}>
              {label}
            </AnimatedInputLabel>
          )}
          {/* the underline for the select field */}
          <UnderLine />
        </SelectContainer>
      </InputWarapper>
    </>
  );
}

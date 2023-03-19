import React, { useId, useState } from 'react';
import { Icon, SelectContainer, SelectField, Wrapper, Option } from './FancyDropDownSelect.style';
import { AnimatedLabel } from '../Atoms/InputLabel';
import UnderLine from '../Atoms/InputUnderline';

import { IFancyDropDownSelect } from './IFancyDropDownSelect.model';

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
      <Wrapper disabled={disabled}>
        {icon && <Icon active={isActive}>{icon}</Icon>}
        <SelectContainer>
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
              <Option key={i} value={item.toLowerCase()} align={inputTextAlign}>
                {item}
              </Option>
            ))}
          </SelectField>

          {label && (
            <AnimatedLabel htmlFor={id} disabledAndSelected={Boolean(disabled) && Boolean(selected)} align={labelAlign}>
              {label}
            </AnimatedLabel>
          )}
          {/* the underline for the select field */}
          <UnderLine />
        </SelectContainer>
      </Wrapper>
    </>
  );
}

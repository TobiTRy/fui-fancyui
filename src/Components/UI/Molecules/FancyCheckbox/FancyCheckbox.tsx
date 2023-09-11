import React, { useId } from 'react';
import RawCheckbox from '../../Atoms/RawCheckbox/RawCheckbox';

import { Typography } from '../../Atoms/Typography';
import { TextWrapper, Wrapper } from './FancyCheckbox.style';
import { uiColors } from '../../Design/design';
import { IFancyCheckboxProps } from './FancyCheckbox.model';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
export default function FancyCheckbox(props: IFancyCheckboxProps) {
  const { label, onChange, defaultChecked, align, alignCheckbox, description, ...rest } = { ...props, ...defaultProps };
  const id = useId();
  const pickedId = props.id ? props.id : id;

  console.log(alignCheckbox)

  return (
    <Wrapper $align={align}>
      {/* The label and description */}
      {(label || description) && <TextWrapper $align={alignCheckbox}>
        {label && (
          <label htmlFor={pickedId}>
            <Typography type="inlineElement" variant="label">
              {label}
            </Typography>
          </label>
        )}
        {description && (
          <Typography type="inlineElement" variant="smText" className="description" style={{ color: uiColors.secondary[1] }}>
            {description}
          </Typography>
        )}
      </TextWrapper>}
      {/* The check box */}
      <RawCheckbox id={pickedId} onChange={onChange} defaultChecked={defaultChecked} {...rest} />
    </Wrapper>
  );
}

// the default props of the component
const defaultProps: IFancyCheckboxProps = {
  align: 'center',
  alignCheckbox: 'left',
};

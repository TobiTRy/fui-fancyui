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

  return (
    <Wrapper $align={align}>
      <TextWrapper $align={alignCheckbox}>
        {label && (
          <label htmlFor={pickedId}>
            <Typography type="inlineElement" variant="label">
              {label}
            </Typography>
          </label>
        )}
        {description && (
          <Typography type="inlineElement" variant="smText" className="description" style={{ color: uiColors.secondary.dark }}>
            {description}
          </Typography>
        )}
      </TextWrapper>

      {/* Add ckeckbox */}
      <RawCheckbox id={pickedId} onChange={onChange} defaultChecked={defaultChecked} {...rest} />
    </Wrapper>
  );
}

// the default props of the component
const defaultProps: IFancyCheckboxProps = {
  align: 'center',
  alignCheckbox: 'right',
};

import React, { useId } from 'react';
import RawCheckbox from '../../Atoms/RawCheckbox/RawCheckbox';

import { Typography } from '../../Atoms/Typography';
import { LabelWrapper, Wrapper } from './FancyCheckbox.style';
import { IFancyCheckboxProps } from './FancyCheckbox.model';
import themeStore from '../../Design/color/themeStore';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
export default function FancyCheckbox(props: IFancyCheckboxProps) {
  const { label, onChange, defaultChecked, align, alignCheckbox, description, ...rest } = { ...defaultProps, ...props };
  const theme = themeStore.getState().theme;

  const id = useId();
  const pickedId = props.id ? props.id : id;

  return (
    <Wrapper $align={align}>
      {/* The label and description */}
      {(label || description) && (
        <LabelWrapper $align={alignCheckbox} htmlFor={pickedId}>
          {label && (
            <Typography type="inlineElement" variant="label" style={{ color: theme.colors.secondary[0], fontWeight: 'bold' }}>
              {label}
            </Typography>
          )}
          {description && (
            <Typography type="inlineElement" variant="smText" className="description" style={{ color: theme.colors.secondary[2] }}>
              {description}
            </Typography>
          )}
        </LabelWrapper>
      )}
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

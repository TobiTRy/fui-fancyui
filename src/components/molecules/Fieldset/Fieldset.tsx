import React from 'react';

import { TTextAlignLC } from '@/interface/TTextAlignLC';
import { TTypography } from '@/interface/TTypography';

import { StyledFieldset, StyledLegend } from './Fieldset.style';
import { Typography } from '@/components/atoms/Typography';

interface IFieldset {
  children?: React.ReactNode;
  label?: string;
  alignLabel?: TTextAlignLC;
  fontVariantLegend?: TTypography;
  disabled?: boolean;
}
// --------------------------------------------------------------------------- //
// ---- A Fieldset that Provides a Label and a Fieldset for some childs ------ //
// --------------------------------------------------------------------------- //
export default function Fieldset(props: IFieldset) {
  const { children, label, alignLabel, fontVariantLegend, disabled } = props;

  return (
    <StyledFieldset $disabled={disabled}>
      {label && (
        <StyledLegend alignLabel={alignLabel}>
          <Typography type={fontVariantLegend || 'label'} htmlFor={label} weight="bold">
            {label}
          </Typography>
        </StyledLegend>
      )}
      {children}
    </StyledFieldset>
  );
}

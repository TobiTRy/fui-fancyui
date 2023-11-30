import React from 'react';

import { StyledFieldset, StyledLegend } from './Fieldset.style';
import { TTypography } from '@/components/core/interface/TTypography';
import { Typography } from '@/components/atoms/Typography';

export type TalignLabel = 'left' | 'center';

interface IFieldset {
  children?: React.ReactNode;
  label?: string;
  alignLabel?: TalignLabel;
  fontVariantLegend?: TTypography;
  disabled?: boolean;
}
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

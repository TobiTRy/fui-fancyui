import { HTMLAttributes, ReactNode } from 'react';

import { TTextAlignLC } from '@/interface/TTextAlignLC';
import { TTypography } from '@/interface/TTypography';

import { StyledFieldset, StyledLegend } from './Fieldset.style';
import { Typography } from '@/components/atoms/Typography';

type TFieldset = {
  children?: ReactNode;
  label?: string;
  alignLabel?: TTextAlignLC;
  fontVariantLegend?: TTypography;
  disabled?: boolean;
} & HTMLAttributes<HTMLFieldSetElement>
// --------------------------------------------------------------------------- //
// ---- A Fieldset that Provides a Label and a Fieldset for some childs ------ //
// --------------------------------------------------------------------------- //
export default function Fieldset(props: TFieldset) {
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

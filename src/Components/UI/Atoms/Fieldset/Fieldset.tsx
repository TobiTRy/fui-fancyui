import React from 'react';
import { StyledFieldset, StyledLegend } from './Fieldset.style';
import { Typography } from '../Typography';
import { TypographyList } from '../Typography/Typography';

export type TalignLabel = 'left' | 'center';

interface IFieldset {
  children: React.ReactNode;
  label?: string;
  alignLabel?: TalignLabel;
  fontVariantLegend?: keyof typeof TypographyList;
}
export default function Fieldset(props: IFieldset) {
  const { children, label, alignLabel, fontVariantLegend } = props;

  return (
    <StyledFieldset>
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

import { Typography } from '@/components/atoms/Typography';
import { TFieldsetWithHTMLAttributes } from '@/components/molecules/Fieldset';
import { StyledFieldset, StyledLegend } from './Fieldset.style';

// --------------------------------------------------------------------------- //
// ---- A Fieldset that Provides a Label and a Fieldset for some childs ------ //
// --------------------------------------------------------------------------- //
export default function Fieldset(props: TFieldsetWithHTMLAttributes) {
  const { children, label, alignLabel, legendSettings, disabled } = props;

  return (
    <StyledFieldset $disabled={disabled}>
      {label && (
        <StyledLegend alignLabel={alignLabel}>
          <Typography
            type={legendSettings?.type || 'content'}
            variant={legendSettings?.variant ?? 'label'}
            weight={legendSettings?.weight ?? 'bold'}
            {...legendSettings}
          >
            {label}
          </Typography>
        </StyledLegend>
      )}
      {children}
    </StyledFieldset>
  );
}

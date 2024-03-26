import { Typography } from '@/components/atoms/Typography';
import { TFieldsetWithHTMLAttributes } from '@/components/molecules/Fieldset';
import { StyledFieldset, StyledLegend } from './Fieldset.style';

// --------------------------------------------------------------------------- //
// ---- A Fieldset that Provides a Label and a Fieldset for some childs ------ //
// --------------------------------------------------------------------------- //
export default function Fieldset(props: TFieldsetWithHTMLAttributes) {
  const { children, label, alignLabel, typographySettings, disabled, ...htmlAttrs } = props;

  return (
    <StyledFieldset $disabled={disabled} {...htmlAttrs}>
      {label && (
        <StyledLegend alignLabel={alignLabel}>
          <Typography
            elType={typographySettings?.elType || 'span'}
            variant={typographySettings?.variant ?? 'interactiveLg'}
            fontWeight={typographySettings?.fontWeight ?? 'bold'}
            {...typographySettings}
          >
            {label}
          </Typography>
        </StyledLegend>
      )}
      {children}
    </StyledFieldset>
  );
}

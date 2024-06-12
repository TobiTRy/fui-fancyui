import { Typography } from '@/components/atoms/Typography';
import { TFieldsetWithHTMLAttributes } from '@/components/molecules/Fieldset';
import { StyledFieldset, StyledLegend } from './Fieldset.style';

// --------------------------------------------------------------------------- //
// ---- A Fieldset that Provides a Label and a Fieldset for some childs ------ //
// --------------------------------------------------------------------------- //
export default function Fieldset(props: TFieldsetWithHTMLAttributes) {
  const { children, legend, alignLegend, typographySettings, disabled, ...htmlAttrs } = props;

  return (
    <StyledFieldset $disabled={disabled} {...htmlAttrs}>
      {legend && (
        <StyledLegend $alignLegend={alignLegend}>
          <Typography
            elType={typographySettings?.elType || 'span'}
            variant={typographySettings?.variant ?? 'interactiveLg'}
            fontWeight={typographySettings?.fontWeight ?? 'bold'}
            {...typographySettings}
          >
            {legend}
          </Typography>
        </StyledLegend>
      )}
      {children}
    </StyledFieldset>
  );
}

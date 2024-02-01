import { StyledAlignedLabel } from './AlignedLabel.style';
import { Typography } from '@/components/atoms/Typography';

import { TAlignedLabelWithAllProps } from './TAlinedLabel.model';

import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ---------- The label handles alignment and typography  -------------------- //
// --------------------------------------------------------------------------- //
export default function AlignedLabel(props: TAlignedLabelWithAllProps) {
  const { children, size = 'md', ownTypographyComponent, typography } = props;

  return (
    <StyledAlignedLabel>
      {!ownTypographyComponent && (
        <Typography variant={sizeSettings[size].fontSize} elType="span" {...typography}>
          {children}
        </Typography>
      )}
      {/* when you want a owm typorgraphy component */}
      {ownTypographyComponent && children}
    </StyledAlignedLabel>
  );
}

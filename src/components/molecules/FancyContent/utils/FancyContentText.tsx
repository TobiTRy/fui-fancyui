import { Typography } from '@/components/atoms/Typography';
import { TTextProps } from './TFancyTextVariant.model';
import { sizes } from '../sizeSettings';

// --------------------------------------------------------------------------- //
// ----------------- The Title for the FancyContent component ---------------- //
// --------------------------------------------------------------------------- //
export function FancyContentTitle(props: TTextProps) {
  const { size, bold = true, fontVariant, children, className, themeType, layer, externalStyle } = props;

  return (
    <Typography
      variant={fontVariant ?? sizes[size || 'lg'].fontSizeTitle}
      weight={bold ? 'bold' : 'normal'}
      type="button"
      className={className}
      themeType={themeType}
      layer={layer}
      externalStyle={externalStyle}
    >
      {children}
    </Typography>
  );
}

// --------------------------------------------------------------------------- //
// -------------- The description for the FancyContent component ------------- //
// --------------------------------------------------------------------------- //
export function FancyContentDescription(props: TTextProps) {
  const { size, bold, fontVariant, children, className, themeType, layer, externalStyle } = props;

  return (
    <Typography
      variant={fontVariant ?? sizes[size || 'sm'].fontSizeTitle}
      layer={layer}
      themeType={themeType}
      weight={bold ? 'bold' : 'normal'}
      type="button"
      className={className}
      externalStyle={externalStyle}
    >
      {children}
    </Typography>
  );
}

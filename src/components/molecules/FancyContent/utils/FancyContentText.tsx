import { Typography } from '@/components/atoms/Typography';
import { TTextProps } from './TFancyTextVariant.model';
import { sizes } from '../sizeSettings';

// --------------------------------------------------------------------------- //
// ----------------- The Title for the FancyContent component ---------------- //
// --------------------------------------------------------------------------- //
export function FancyContentTitle(props: TTextProps) {
  const { size, fontWeight, fontVariant, type, children, className, themeType, layer, externalStyle } = props;

  return (
    <Typography
      elType={type ?? 'span'}
      variant={fontVariant ?? sizes[size || 'lg'].fontSizeTitle}
      fontWeight={fontWeight ?? 'bold'}
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
  const { size, fontWeight, type, fontVariant, children, className, themeType, layer, externalStyle } = props;

  return (
    <Typography
      elType={type ?? 'span'}
      variant={fontVariant ?? sizes[size || 'sm'].fontSizeTitle}
      layer={layer}
      themeType={themeType}
      fontWeight={fontWeight}
      className={className}
      externalStyle={externalStyle}
    >
      {children}
    </Typography>
  );
}

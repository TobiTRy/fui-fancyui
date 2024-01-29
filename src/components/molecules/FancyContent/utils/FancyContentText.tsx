import { Typography } from '@/components/atoms/Typography';
import { TTextProps } from './TFancyTextVariant.model';
import { sizes } from '../sizeSettings';

// --------------------------------------------------------------------------- //
// ----------------- The Title for the FancyContent component ---------------- //
// --------------------------------------------------------------------------- //
export function FancyContentTitle(props: TTextProps) {
  const { size, bold = true, fontVariant, type, children, className, themeType, layer, externalStyle } = props;

  return (
    <Typography
      type={type ?? 'inlineElement'}
      variant={fontVariant ?? sizes[size || 'lg'].fontSizeTitle}
      weight={bold ? 'bold' : 'normal'}
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
  const { size, bold, type, fontVariant, children, className, themeType, layer, externalStyle } = props;

  return (
    <Typography
      type={type ?? 'inlineElement'}
      variant={fontVariant ?? sizes[size || 'sm'].fontSizeTitle}
      layer={layer}
      themeType={themeType}
      weight={bold ? 'bold' : 'normal'}
      className={className}
      externalStyle={externalStyle}
    >
      {children}
    </Typography>
  );
}

import { Typography } from '@/components/atoms/Typography';
import { TTextProps } from './TFancyTextVariant.model';
import { sizes } from '../sizeSettings';

// --------------------------------------------------------------------------- //
// ----------------- The Title for the FancyContent component ---------------- //
// --------------------------------------------------------------------------- //
export default function FancyContentTitle(props: TTextProps) {
  const { sizeC, fontWeight, fontVariant, type, children, lineHeight, className, themeType, layer, externalStyle } =
    props;

  console.log(layer);

  return (
    <Typography
      elType={type ?? 'span'}
      variant={fontVariant ?? sizes[sizeC || 'lg'].fontSizeTitle}
      fontWeight={fontWeight ?? 'bold'}
      className={className}
      themeType={themeType}
      layer={layer}
      lineHeight={lineHeight}
      externalStyle={externalStyle}
    >
      {children}
    </Typography>
  );
}

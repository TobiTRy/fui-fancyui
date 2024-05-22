import { Typography } from '@/components/atoms/Typography';
import { TTextProps } from './TFancyTextVariant.model';
import { sizes } from '../sizeSettings';

// --------------------------------------------------------------------------- //
// -------------- The description for the FancyContent component ------------- //
// --------------------------------------------------------------------------- //
export default function FancyContentDescription(props: TTextProps) {
  const { sizeC, fontWeight, type, lineHeight, fontVariant, children, className, themeType, layer, externalStyle } =
    props;

  return (
    <Typography
      elType={type ?? 'span'}
      variant={fontVariant ?? sizes[sizeC || 'sm'].fontSizeTitle}
      layer={layer}
      themeType={themeType}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      className={className}
      externalStyle={externalStyle}
    >
      {children}
    </Typography>
  );
}

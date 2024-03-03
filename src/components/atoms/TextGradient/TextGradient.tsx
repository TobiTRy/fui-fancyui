import { TTextGradientProps } from '@/components/atoms/TextGradient/TTextGradient.model';
import { GradientText } from '@/components/atoms/TextGradient/TextGradient.style';

// --------------------------------------------------------------------------- //
// ---------- A TextGradient Component generate a gradient over a Text ------- //
// --------------------------------------------------------------------------- //
export default function TextGradient(props: TTextGradientProps) {
  const { children, degree, colors, orientation, position } = props;

  return (
    <GradientText $degree={degree} $colors={colors} $orientation={orientation} $position={position}>
      {children}
    </GradientText>
  );
}

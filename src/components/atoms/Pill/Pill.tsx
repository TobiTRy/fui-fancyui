import { StyledPill } from '@/components/atoms/Pill/Pill.style';
import { sizes } from './sizeSettings';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';

type TPill = {
  size?: keyof typeof sizes;
  borderRadius?: TBorderRadiusSizes;
} & React.ComponentProps<typeof StyledPill>;
export default function Pill(props: TPill) {
  const { themeType, outlined, layer, externalStyle, size, children, ...htmlProps } = props;

  return (
    <StyledPill
      themeType={themeType}
      outlined={outlined}
      layer={layer || 3}
      $size={size}
      externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledPill>
  );
}

import { TFancyLineWithHTMLAttributes } from './TFancyLine.model';
import { StyledFancyLine } from '@/components/atoms/FancyLine/FancyLine.style';

// --------------------------------------------------------------------------- //
// ------------ A dynamic line (vertical/horizontal) for better UX/UI  ------- //
// --------------------------------------------------------------------------- //
export default function FancyLine(props: TFancyLineWithHTMLAttributes) {
  const { direction = 'horizontal', thickness, margin, themeType, layer, length, ...htmlProps } = props;

  return (
    <StyledFancyLine
      $direction={direction}
      $thickness={thickness}
      $length={length}
      $margin={margin}
      $themeType={themeType}
      $layer={layer}
      {...htmlProps}
    />
  );
}

import { TFancyLineWithHTMLAttributes } from './TFancyLine.model';
import { StyledFancyLine } from '@/components/atoms/FancyLine/FancyLine.style';

// --------------------------------------------------------------------------- //
// ------------ A dynamic line (vertical/horizontal) for better UX/UI  ------- //
// --------------------------------------------------------------------------- //
export default function FancyLine(props: TFancyLineWithHTMLAttributes) {
  const {
    direction = 'horizontal',
    thickness = '1px',
    margin,
    themeType = 'accent',
    layer,
    length,
    externalStyle,
    isActive,
    systemMessageType,
    ...htmlProps
  } = props;

  return (
    <StyledFancyLine
      $direction={direction}
      $thickness={thickness}
      $length={length}
      $margin={margin}
      $themeType={themeType}
      $layer={layer}
      $isActive={isActive}
      $systemMessageType={systemMessageType}
      $externalStyle={externalStyle}
      {...htmlProps}
    />
  );
}

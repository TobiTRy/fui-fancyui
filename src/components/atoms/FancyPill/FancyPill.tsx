import { TFancyPillWithHTMLAttrs } from './TFancyPill.model';
import { StyledFancyPill } from './FancyPill.styled';

// --------------------------------------------------------------------------- //
// --------------  A Pill can be used for style and user actions ------------- //
// --------------------------------------------------------------------------- //
export default function FancyPill(props: TFancyPillWithHTMLAttrs) {
  const { layer, themeType, outlined, outlinedBackgroundStrength, externalStyle, isActive, isHoverable, ...htmlProps } =
    props;

  return (
    <StyledFancyPill
      $layer={layer}
      $outlined={outlined}
      $isActive={isActive}
      $themeType={themeType}
      $isHoverable={isHoverable}
      $externalStyle={externalStyle}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      {...htmlProps}
    >
      {props.children}
    </StyledFancyPill>
  );
}

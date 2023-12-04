import { StyledButton } from './Button.style';
import { IButton } from './Button.model';

// --------------------------------------------------------------------------- //
// --------------- A normal Button with Style from the Theme ----------------- //
// --------------------------------------------------------------------------- //
export default function Button(props: IButton) {
  const { children, wide, themeType, layer, textColor, hoverColor, outlined, externalStyle, textHover, ...htmlProps } = {
    ...defaultProps,
    ...props,
  };
  return (
    <StyledButton
      $wide={wide}
      $themeType={themeType}
      $layer={layer}
      $textColor={textColor}
      $hoverColor={hoverColor}
      $outlined={outlined}
      $externalStyle={externalStyle}
      $textHover={textHover}
      {...htmlProps}
    >
      {children}
    </StyledButton>
  );
}

const defaultProps = {
  themeType: 'accent' as const,
  size: 'md',
  layer: 0 as const,
};

import { TButtonWithNativeAttrs } from './Button.model';
import { ButtonStyle, StyledButton } from './Button.style';

// --------------------------------------------------------------------------- //
// --------------- A normal Button with Style from the Theme ----------------- //
// --------------------------------------------------------------------------- //
export default function Button(props: TButtonWithNativeAttrs) {
  const {
    children,
    wide,
    sizeC = 'md',
    themeType = 'accent',
    layer = 0,
    textColor,
    borderRadius,
    hoverColor,
    outlined,
    externalStyle,
    textHover,
    notAButton,
    ...htmlProps
  } = props;

  return (
    <>
      {notAButton ? (
        <ButtonStyle
          $sizeC={sizeC}
          $borderRadius={borderRadius}
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
        </ButtonStyle>
      ) : (
        <StyledButton $wide={wide} {...htmlProps}>
          <ButtonStyle
            $sizeC={sizeC}
            $wide={wide}
            $themeType={themeType}
            $layer={layer}
            $textColor={textColor}
            $hoverColor={hoverColor}
            $outlined={outlined}
            $externalStyle={externalStyle}
            $textHover={textHover}
          >
            {children}
          </ButtonStyle>
        </StyledButton>
      )}
    </>
  );
}

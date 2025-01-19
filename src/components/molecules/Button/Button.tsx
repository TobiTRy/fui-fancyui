'use client';

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
    disabled,
    borderRadius,
    hoverColor,
    outlined,
    externalStyle,
    textHover,
    notAButton,
    noSize,
    className,
    appendClassNameOnStyle,
    outlinedRemoveBorder,
    backgroundStrength,
    backgroundState,
    ...htmlProps
  } = props;

  const Button = () => (
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
      $disabled={disabled}
      $backgroundStrength={backgroundStrength}
      $backgroundState={backgroundState}
      $noSize={noSize}
      $outlinedRemoveBorder={outlinedRemoveBorder}
      className={notAButton || appendClassNameOnStyle ? className : undefined}
    >
      {children}
    </ButtonStyle>
  );

  return (
    <>
      {notAButton ? (
        <Button {...htmlProps} />
      ) : (
        <StyledButton
          $wide={wide}
          className={!appendClassNameOnStyle ? className : undefined}
          {...htmlProps}
          disabled={disabled}
        >
          <Button />
        </StyledButton>
      )}
    </>
  );
}

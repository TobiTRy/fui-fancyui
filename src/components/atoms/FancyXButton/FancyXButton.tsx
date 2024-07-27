'use client';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TFancyXButtonWithHTMLAttrs } from '@/components/atoms/FancyXButton/FancyXButton.model';
import { StyledFancyXButton } from '@/components/atoms/FancyXButton/FancyXButton.style';
import { SVGXlg } from '@/components/icons/';

// --------------------------------------------------------------------------- //
// --------------- The main Component for the X Close Button------- ---------- //
// --------------------------------------------------------------------------- //
export default function FancyXButton(props: TFancyXButtonWithHTMLAttrs) {
  const { themeType, layer, externalStyle, sizeC, ...htmlProps } = props;
  //check wich design comes in and add the right color object uiColor or systemMessages  to the button
  return (
    <StyledFancyXButton $themeType={themeType} $layer={layer} $externalStyle={externalStyle} {...htmlProps}>
      <FancySVGAtom themeType={themeType} layer={layer} sizeC={sizeC}>
        <SVGXlg />
      </FancySVGAtom>
    </StyledFancyXButton>
  );
}

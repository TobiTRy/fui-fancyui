import { css } from 'styled-components';
import { FancySVGAtom, TFancySVGAtomWithNativeAttrs } from '@/components/atoms/FancySVGAtom';

export default function FancyIconTest(props: TFancySVGAtomWithNativeAttrs) {
  const { children, sizeC = 'xxs', externalStyle, layer, themeType, ...SVGProps } = props;

  console.log(layer, themeType);
  return (
    <FancySVGAtom
      themeType={'accent'}
      layer={layer}
      externalStyle={css`
        flex-shrink: 0;
        ${externalStyle}
      `}
      sizeC={sizeC}
      {...SVGProps}
    >
      {children}
    </FancySVGAtom>
  );
}

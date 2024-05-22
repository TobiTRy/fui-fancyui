import { css } from 'styled-components';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TFancySVGAtomWithNativeAttrs } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';

export default function FancyContentIcon(props: TFancySVGAtomWithNativeAttrs) {
  const { children, sizeC = 'xxs', externalStyle, layer, ...SVGProps } = props;

  return (
    <FancySVGAtom
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

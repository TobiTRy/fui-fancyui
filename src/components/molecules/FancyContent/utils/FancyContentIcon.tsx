import { css } from 'styled-components';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TSVGAtomProps } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';

export function FancyContentIcon(props: TSVGAtomProps) {
  const { children, sizeC = 'xxs', externalStyle, ...SVGProps } = props;

  return (
    <FancySVGAtom
      isPassive
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

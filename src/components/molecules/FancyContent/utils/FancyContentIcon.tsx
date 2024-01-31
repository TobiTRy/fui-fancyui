import { css } from 'styled-components';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { ISVGAtomProps } from '@/components/atoms/FancySVGAtom/FancySVGAtom.model';

export function FancyContentIcon(props: ISVGAtomProps) {
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

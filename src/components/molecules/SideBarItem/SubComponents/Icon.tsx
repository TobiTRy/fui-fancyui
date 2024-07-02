import { FancySVGAtom, TFancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { css } from 'styled-components';

type TSideBarItemIcon = TFancySVGAtom;
export function Icon(props: TSideBarItemIcon) {
  const { children, sizeC, externalStyle } = props;

  return (
    <FancySVGAtom
      sizeC={sizeC ?? 'sm'}
      externalStyle={css`
        flex-shrink: 0;
        ${externalStyle}
      `}
    >
      {children}
    </FancySVGAtom>
  );
}

import { FancySVGAtom, TFancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { css } from 'styled-components';
import { sizeSettings } from '../sizeSettings';
import { TComponentSizes } from '@/types/TComponentSizes';

type TSideBarItemIcon = Omit<TFancySVGAtom, 'sizeC'> & {
  sizeC?: TComponentSizes;
};
export function Icon(props: TSideBarItemIcon) {
  const { children, sizeC = 'sm', externalStyle } = props;

  return (
    <FancySVGAtom
      sizeC={sizeSettings[sizeC].iconSize}
      externalStyle={css`
        flex-shrink: 0;
        ${externalStyle}
      `}
    >
      {children}
    </FancySVGAtom>
  );
}

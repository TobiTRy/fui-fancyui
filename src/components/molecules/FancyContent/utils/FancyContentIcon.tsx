import { css } from 'styled-components';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TFancySVGAtomSizes, TFancySVGAtomWithNativeAttrs } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';

import { sizes } from '../sizeSettings';
import { themeStore } from '@/design/theme/themeStore';
import { TComponentSizesMid } from '@/types';

type TFancyContentIcon = {
  sizeC?: TComponentSizesMid;
  noPadding?: boolean;
} & Omit<TFancySVGAtomWithNativeAttrs, 'sizeC'>;

export default function FancyContentIcon(props: TFancyContentIcon) {
  const { children, sizeC = 'md', externalStyle, noPadding, ...SVGProps } = props;
  const theme = themeStore((state) => state.theme);

  return (
    <FancySVGAtom
      isPassive
      sizeC={sizes[sizeC].iconSize}
      externalStyle={css`
        flex-shrink: 0;
        padding: ${noPadding ? '0' : sizes[sizeC].iconPadding && theme.spacing[sizes[sizeC].iconPadding]};
        width: ${sizes[sizeC].iconHeight};
        height: ${sizes[sizeC].iconHeight};
        ${externalStyle}
      `}
      {...SVGProps}
    >
      {children}
    </FancySVGAtom>
  );
}

import { css } from 'styled-components';

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { TFancySVGAtomWithNativeAttrs } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';

import { sizes } from '../sizeSettings';
import { themeStore } from '@/design/theme/themeStore';
import { TComponentSizes } from '@/types';

type TFancyContentIcon = {
  sizeC?: TComponentSizes;
} & Omit<TFancySVGAtomWithNativeAttrs, 'sizeC'>;

export default function FancyContentIcon(props: TFancyContentIcon) {
  const { children, sizeC = 'sm', externalStyle, ...SVGProps } = props;
  const theme = themeStore((state) => state.theme);

  return (
    <FancySVGAtom
      isPassive
      sizeC={sizes[sizeC].iconSize}
      externalStyle={css`
        flex-shrink: 0;
        padding: ${sizes[sizeC].iconPadding && theme.spacing[sizes[sizeC].iconPadding]};
        ${externalStyle}
      `}
      {...SVGProps}
    >
      {children}
    </FancySVGAtom>
  );
}

import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { SVGClipBoardIcon } from '@/components/icons/SVGClipBoardIcon';
import { SVGClipBoardIconChecked } from '@/components/icons/SVGClipBoardIconChecked';
import { WrapperSVG } from './ClipBoardIcon.style';

import { sizeSettings } from './sizeSettings';
import { TComponentSizes } from '@/types/TComponentSizes';
import React from 'react';

type TClipBoardIcon = {
  sizeC?: TComponentSizes;
  copyd: boolean;
  copyedIcon?: React.ReactNode;
  unCopyedIcon?: React.ReactNode;
};

export default function ClipBoardIcon(props: TClipBoardIcon) {
  const { sizeC = 'sm', copyd, copyedIcon = <SVGClipBoardIconChecked />, unCopyedIcon = <SVGClipBoardIcon /> } = props;

  return (
    <WrapperSVG>
      <FancySVGAtom sizeC={sizeSettings[sizeC].iconSize}>{copyd ? copyedIcon : unCopyedIcon}</FancySVGAtom>
    </WrapperSVG>
  );
}

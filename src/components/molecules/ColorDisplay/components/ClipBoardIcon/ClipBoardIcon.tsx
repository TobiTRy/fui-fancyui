import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { SVGClipBoardIcon } from '@/components/icons/SVGClipBoardIcon';
import { SVGClipBoardIconChecked } from '@/components/icons';
import { WrapperSVG } from './ClipBoardIcon.style';

import { sizeSettings } from './sizeSettings';
import { TClipBoardIcon } from './ClipBoardicon.model';

export default function ClipBoardIcon(props: TClipBoardIcon) {
  const { sizeC = 'sm', copyd, copyedIcon = <SVGClipBoardIconChecked />, unCopyedIcon = <SVGClipBoardIcon /> } = props;

  return (
    <WrapperSVG>
      <FancySVGAtom sizeC={sizeSettings[sizeC].iconSize}>{copyd ? copyedIcon : unCopyedIcon}</FancySVGAtom>
    </WrapperSVG>
  );
}

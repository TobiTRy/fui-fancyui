import React from 'react';

import { css, keyframes } from 'styled-components';
import SVGLoadingArrows from '../../SVGIcons/SVGLoadingArrows';
import { FancySVGAtom } from '../FancySVGAtom';
import { ISVGAtomProps, ISizes } from '../FancySVGAtom/FancySVGAtom.model';

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface ILoadingSVGArrowsProps {
  size?: ISizes;
  isLoading?: boolean;
}

// --------------------------------------------------------------------------- //
//  A loading animation with two arrows thats shown when something is loading  //
// --------------------------------------------------------------------------- //
export default function LoadingSVGArrows(props: ILoadingSVGArrowsProps & ISVGAtomProps) {
  const { size = 'md', isLoading, externalStyle, ...SVGAtomProps } = props;

  return isLoading ? (
    <FancySVGAtom
      size={size}
      isPassive
      externalStyle={css`
        animation: ${loadingAnimation} 2s infinite ease-in-out;
        ${externalStyle}
      `}
      {...SVGAtomProps}
    >
      <SVGLoadingArrows />
    </FancySVGAtom>
  ) : null;
}

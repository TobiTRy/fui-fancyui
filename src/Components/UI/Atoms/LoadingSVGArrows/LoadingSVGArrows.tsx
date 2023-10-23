import React from 'react';

import styled, { keyframes } from 'styled-components';
import SVGLoadingArrows from '../../SVGIcons/SVGLoadingArrows';
import { ISVGAtomProps } from '../FancySVGAtom/FancySVGAtom.model';

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const AnimatedSVGArrwos = styled.span`
  animation: ${loadingAnimation} 2s infinite ease-in-out;
  line-height: 0;
`;

interface ILoadingSVGArrowsProps {
  isLoading?: boolean;
}

// --------------------------------------------------------------------------- //
//  A loading animation with two arrows thats shown when something is loading  //
// --------------------------------------------------------------------------- //
export default function LoadingSVGArrows(props: ILoadingSVGArrowsProps & ISVGAtomProps) {
  const { isLoading } = props;

  return isLoading ? (
    <AnimatedSVGArrwos>
      <SVGLoadingArrows />
    </AnimatedSVGArrwos>
  ) : null;
}

import styled, { keyframes } from 'styled-components';

import { SVGLoadingArrows } from '@/components/icons/SVGLoadingArrows';
import { TSVGAtomProps } from '@/components/atoms/FancySVGAtom/TFancySVGAtom.model';

interface ILoadingSVGArrowsProps {
  isLoading?: boolean;
}
// --------------------------------------------------------------------------- //
//  A loading animation with two arrows thats shown when something is loading  //
// --------------------------------------------------------------------------- //
export default function LoadingSVGArrows(props: ILoadingSVGArrowsProps & TSVGAtomProps) {
  const { isLoading } = props;

  return isLoading ? (
    <AnimatedSVGArrwos>
      <SVGLoadingArrows />
    </AnimatedSVGArrwos>
  ) : null;
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const AnimatedSVGArrwos = styled.span`
  animation: ${loadingAnimation} 2s infinite ease-in-out;
  line-height: 0;
`;

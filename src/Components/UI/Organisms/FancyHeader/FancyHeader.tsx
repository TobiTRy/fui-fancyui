import React from 'react';

import SimpleHeader from '../../Molecules/SimpleHeader/SimpleHeader';
import { styled } from 'styled-components';
import { spacingPx } from '../../Design/design';

import {ISimpleHeader} from '../../Molecules/SimpleHeader/SimpleHeader.model';

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
`;

// --------------------------------------------------------------------------- //
// ------ The header component which handles the position and the props ------ //
// --------------------------------------------------------------------------- //
interface IFancyHeader extends ISimpleHeader {

}
export default function FancyHeader(props: IFancyHeader) {
  const { rightSlot, leftSlot, middeSlot, spacingLeftRight, headerHeight} = {...defaultProps, ...props};


  return (
    <Wrapper>
      <SimpleHeader leftSlot={leftSlot} middeSlot={middeSlot} headerHeight={headerHeight} spacingLeftRight={spacingLeftRight} rightSlot={rightSlot} />
    </Wrapper>
  );
}

const defaultProps: IFancyHeader = {
  spacingLeftRight: spacingPx.sm,
  headerHeight: '3rem',
}
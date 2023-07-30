import React from 'react';

import Slot, { ISlot } from '../../Atoms/Slot/Slot';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const StyledHeaderSlot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const StyledOutOfHeaderSlot = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
`;

interface IHeaderSlot {
  headerSlot: ISlot;
  outOfHeaderSlot?: React.ReactNode;
}
export default function HeaderSlot(props: IHeaderSlot) {
  const { headerSlot, outOfHeaderSlot } = props;

  return (
    <Wrapper>
      <StyledHeaderSlot>
        <Slot {...headerSlot} />
      </StyledHeaderSlot>
      <StyledOutOfHeaderSlot>{outOfHeaderSlot}</StyledOutOfHeaderSlot>
    </Wrapper>
  );
}

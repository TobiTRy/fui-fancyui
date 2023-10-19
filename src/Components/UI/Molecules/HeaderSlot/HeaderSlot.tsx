import React from 'react';

import Slot, { ISlot } from '../../Atoms/Slot/Slot';
import { styled } from 'styled-components';

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


interface IHeaderSlot {
  headerSlot: ISlot;
}
export default function HeaderSlot(props: IHeaderSlot) {
  const { headerSlot } = props;

  return (
    <Wrapper>
      <StyledHeaderSlot>
        <Slot {...headerSlot} />
      </StyledHeaderSlot>
    </Wrapper>
  );
}

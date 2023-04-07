import React from 'react';
import styled, { css } from 'styled-components';
import { uiColors } from '../../Design/design';

export const BottomCenterdFixed = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

const Wrapper = styled.div<{ bottomFixed?: boolean; width?: string; secondBar?: boolean }>`
  ${({ bottomFixed }) => (bottomFixed ? BottomCenterdFixed : null)}

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  width: ${({ width }) => (width ? width : '100%')};
  background-color: ${uiColors.primary.hover};
  border-radius: 12px 12px 0px 0px;
  box-shadow: 0 0 ${({ secondBar }) => (secondBar ? '24px' : '12px')} black;
`;

interface IEditBarModal {
  children?: JSX.Element[];
  scrollable?: boolean;
  bottomFixed?: boolean;
  secondBar?: boolean;
  width?: string;
}

export default function EditBarModal(props: IEditBarModal) {
  const { children, scrollable, bottomFixed = true, width, secondBar } = props;

  return <Wrapper>
    {children}
  </Wrapper>;
}

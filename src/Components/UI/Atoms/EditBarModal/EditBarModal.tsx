import React from 'react';
import styled, { css } from 'styled-components';
import { uiColors, spacingPx } from '../../Design/design';

const calcBarWidthandSpacing = (width?: string, spacingLeftRight?: string) => {
  if (width) {
    if (spacingLeftRight) {
      return css`
        width: calc(${width} - ${spacingLeftRight});
      `;
    } else {
      return css`
        width: ${width};
      `;
    }
  } else {
    if (spacingLeftRight) {
      return css`
        width: calc(100% - ${spacingLeftRight});
      `;
    } else {
      return css`
        width: 100%;
      `;
    }
  }
};

export const BottomCenterdFixed = css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

const Wrapper = styled.div<{ width?: string; secondBar?: boolean; spacingLeftRight?: string }>`
  box-sizing: border-box;
  padding: ${spacingPx.md};
  gap: ${spacingPx.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  ${({ width, spacingLeftRight }) => calcBarWidthandSpacing(width, spacingLeftRight)};
  background-color: ${uiColors.primary.hover};
  border-radius: 12px 12px 0px 0px;
  box-shadow: 0 0 12px black;
`;

interface IEditBarModal {
  children?: JSX.Element[];
  scrollable?: boolean;
  width?: string;
  spacingLeftRight?: string;
}

export default function EditBarModal(props: IEditBarModal) {
  const { children, scrollable, width, spacingLeftRight } = props;

  return (
    <Wrapper spacingLeftRight={spacingLeftRight} width={width}>
      {children}
    </Wrapper>
  );
}

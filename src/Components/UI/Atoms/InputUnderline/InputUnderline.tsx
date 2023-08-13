import styled, { css } from 'styled-components';
import { colorPalet, uiColors } from '../../Design/design';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

import React from 'react';

//the underline for the input fields
type IStyledUnderline = IStyledPrefixAndPicker<IFancyUnderline>;
const UnderLine = styled.i<IStyledUnderline>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  border-radius: 5px;
  background: ${uiColors.secondary.darkest};
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    width: 100%;
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: ${({ $colorState }) => ($colorState === 'default' ? '0' : '1')};
    height: 100%;
    background: ${({ $colorState }) => {
      switch ($colorState) {
        case 'active':
          return css`linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.light})`;
        case 'error':
          return css`linear-gradient(90deg, ${colorPalet.red_dark}, ${colorPalet.red_light})`;
        default:
          return 'transparent';
      }
    }};

    transition: 0.25s;
    transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
`;

interface IFancyUnderline {
  colorState?: 'error' | 'active' | 'default';
  autoWidth?: boolean;
}

export default function FancyInputUnderline(props: IFancyUnderline) {
  const { colorState = 'default', autoWidth } = props;

  return <UnderLine $colorState={colorState} $autoWidth={autoWidth} />;
}

//this function generates the state behavior for the underline
export const UnderLineFocusStyle = (Label: any, labelAlign?: 'center' | 'left') => {
  const calcTransform = labelAlign !== 'center' ? 'translateY(-20px)' : 'translateY(-20px) translate(-50%)';

  return css`
    &:focus ~ ${Label}, &:valid ~ ${Label} {
      color: ${uiColors.accent.main};
      transform: ${calcTransform};
    }

    &:focus ~ ${UnderLine}::before {
      opacity: 1;
    }
  `;
};

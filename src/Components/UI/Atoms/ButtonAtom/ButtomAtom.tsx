import React from 'react';
import styled, { css } from 'styled-components';
import { fontSize } from '../../Design/design';
import { disabledStyle } from '../../HelperFunctions/disableStyle';
import IButtonAtom from './IButtonAtom.model';




const generateButtonStyles = (props: IButtonAtom) => {
  const { wide, size, externalStyle } = props;

  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    width: ${wide ? '100%' : 'initial'};
    font-size: ${fontSize[size!]};

    ${externalStyle}

    &:disabled {
      ${disabledStyle}
    }
  `;
};

const StyledButton = styled.button<IButtonAtom>`
  ${(props) => generateButtonStyles(props)}
`;

export default function ButtonAtom(props: IButtonAtom) {
  const { icon, label, disabled, children,...buttonProps } = props;

  return (
    <StyledButton type="button" disabled={disabled} {...buttonProps}>
      { children }
    </StyledButton>
  );
}

ButtonAtom.defaultProps = {
  label: 'Button',
  disabled: false,
  wide: true,
  onClick: () => {},
};

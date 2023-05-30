import React from 'react';

import styled, { css } from 'styled-components';

import { generatePadding } from '../../HelperFunctions/generatePadding';
import { calcIconPaddingAndAlign, IcalcIconPadding } from '../../HelperFunctions/generateIconPadding';
import { borderRadius } from '../../Design/design';

interface IFancyLI {
  icon?: React.ReactNode;
  label?: string;
  wide?: boolean;
}
type FancyLi = IFancyLI & IcalcIconPadding;

const genreateFantyLi = (props: FancyLi) => {
  const { size, aligned, wide } = props;

  const generateBorderRadius = wide ? borderRadius!.large : borderRadius[size!];

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: ${generatePadding(0.5)[size!]};
    width: ${wide ? '100%' : 'initial'};
    
    border-radius: ${generateBorderRadius};

    & i {
      display: flex;
      ${calcIconPaddingAndAlign({ aligned, size })}
      align-items: center;
    }
  `;
};

const FancyLiItem = styled.li`
  ${(props: FancyLi) => genreateFantyLi(props)}
`;

export default function FancyLI(props: FancyLi) {
  const { icon, label, size, aligned } = props;

  return (
    <FancyLiItem size={size} aligned={aligned}>
      {icon && <i>{icon}</i>}
      <p>{label}</p>
    </FancyLiItem>
  );
}

FancyLI.defaultProps = {
  size: 'medium',
  aligned: 'left',
  label: 'Label',
  wide: true,
};

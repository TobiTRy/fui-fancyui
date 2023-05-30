import React from 'react';

import styled from 'styled-components';
import { IFancyButton } from './IFancyButton.model';

import generateThemeItem from '../../HelperFunctions/generateThemeItem';
import SVGAtom from '../../Atoms/SVGAtom/SVGAtom';


//this creates the button component and handles the style via generateButton
const Button = styled.button`
  ${(props: IFancyButton) => generateThemeItem(props)}
`;

//the main react component to generate the fancyButton
export default function FancyButton({ ...props }: IFancyButton) {
  const { icon, label, size  } = props;

  return (
    <Button type="button" {...props}>
      {icon && <SVGAtom size={size}>{icon}</SVGAtom>}
      {label && <span>{label}</span>}
    </Button>
  );
}

FancyButton.defaultProps = {
  design: 'accent',
  size: 'large',
  wide: true,
};

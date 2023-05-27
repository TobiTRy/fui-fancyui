import React from 'react';

import styled, { css } from 'styled-components';

import { generatePadding } from '../../HelperFunctions/generatePadding';
import { themeHandler } from '../../HelperFunctions/themeHandler';

import ButtomAtom from '../../Atoms/ButtonAtom/ButtomAtom';
import IButtonAtom from '../../Atoms/ButtonAtom/IButtonAtom.model';
import { IUiColorsTypes, borderRadius } from '../../Design/design';
import SVGAtom from '../../Atoms/SVGAtom/SVGAtom';

import { calcIconPaddingAndAlign } from '../../HelperFunctions/generateIconPadding';

interface INormalButton extends IButtonAtom {
  hoverColor?: string;
  design: IUiColorsTypes;
  themeTextColor?: IUiColorsTypes;
  customTextColor?: string;
  customBackgroundColor?: string;
}

const StyledSVGAtom = styled(SVGAtom)`
  fill: red;
`;


const generateNormal = (props: INormalButton) => {
  const { design: theme, wide, size, label, themeTextColor, customBackgroundColor, customTextColor } = props;
  //reduce the padding with the border size
  const paddings = generatePadding(0, !label ? false : true);

  const pickedtheme = themeHandler({ theme, themeTextColor, customTextColor, customBackgroundColor });

  const generateBorderRadius = wide ? borderRadius!.large : borderRadius[size!];

  return css`
    padding: ${paddings[size!]};
    ${pickedtheme};
    border-radius: ${generateBorderRadius};

    & ${StyledSVGAtom} {
      ${calcIconPaddingAndAlign({ aligned: 'left', size })}
      fill: red;
    }

    &:hover:enabled {
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    }
  `;
};

export default function ButtonMolecule(props: INormalButton) {
  const { icon, label } = props;
  const genreateStyle = generateNormal(props);

  return (
    <ButtomAtom externalStyle={genreateStyle}>
      {icon && <StyledSVGAtom aligned="left">{icon}</StyledSVGAtom>}
      {label && <span>{label}</span>}
    </ButtomAtom>
  );
}

ButtonMolecule.defaultProps = {
  label: 'Button',
  size: 'medium',
  aligned: 'right',
  disabled: false,
  wide: true,
  design: 'accent',
};

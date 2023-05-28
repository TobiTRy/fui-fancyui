import React from 'react';

import { css } from 'styled-components';

import { generatePadding } from '../../HelperFunctions/generatePadding';
import { themeHandler } from '../../HelperFunctions/themeHandler';

import ButtomAtom from '../../Atoms/ButtonAtom/ButtomAtom';
import IButtonAtom from '../../Atoms/ButtonAtom/IButtonAtom.model';
import { IUiColorsTypes, borderRadius, uiColors } from '../../Design/design';
import SVGAtom from '../../Atoms/SVGAtom/SVGAtom';

import { calcIconPaddingAndAlign } from '../../HelperFunctions/generateIconPadding';


interface INormalButton extends IButtonAtom {
  hoverColor?: string;
  aligned?: 'left' | 'right' | 'center';
  iconAligned?: 'left' | 'right' | 'center';

};

const alignment = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
};


const generateNormal = (props: INormalButton) => {
  const { design: theme, wide, size, label, themeTextColor, customBackgroundColor, customTextColor, aligned, iconAligned } = props;

  const paddings = generatePadding(0, !label ? false : true);



  const generateBorderRadius = wide ? borderRadius!.large : borderRadius[size!];

  const calculateIconAlign = iconAligned ? iconAligned : aligned;

  return css`
    padding: ${paddings[size!]};
    border-radius: ${generateBorderRadius};
    justify-content: ${aligned && alignment[aligned]};
    
    & i {
      ${calcIconPaddingAndAlign({ aligned: calculateIconAlign, size })}
    }
  `;
};

export default function ButtonMolecule(props: INormalButton) {
  const { icon, label, disabled } = props;

  const generateStyle = generateNormal(props);
  //TODO: OVERGIVE THEME STYLESD THE ATOM
  return (
    <ButtomAtom disabled={disabled} size={props.size} externalStyle={generateStyle}>
      {icon && <SVGAtom size={props.size}>{icon}</SVGAtom>}
      {label && <span>{label}</span>}
    </ButtomAtom>
  );
}

ButtonMolecule.defaultProps = {
  label: 'Button',
  size: 'large',
  aligned: 'left',
  iconAligned: 'left',
  disabled: false,
  wide: true,
  design: 'accent',
};

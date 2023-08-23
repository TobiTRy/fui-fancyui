import React from 'react';
import { css, keyframes, styled } from 'styled-components';
import { IFancyButtonProps } from './IFancyButton.model';

import generateThemeItem, { IGenerateThemeItem } from '../../HelperFunctions/designFunctions/generateThemeItem';
import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import Typography from '../../Atoms/Typography/Typography';
import SVGLoadingArrows from '../../SVGIcons/SVGLoadingArrows';

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

//this creates the button component and handles the style via generateButton
const Button = styled.button<IGenerateThemeItem>`
  ${(props: IGenerateThemeItem) => generateThemeItem(props)}
`;

//the main react component to generate the fancyButton
export default function FancyButton(props: IFancyButtonProps) {
  const { icon, label, size, wide, design, align, color, hoverColor, outlined, roundedCompletly, loading, ...htmlButtonProps } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Button
      $size={size!}
      $design={design!}
      $roundedCompletly={roundedCompletly}
      $align={align}
      $color={color}
      $wide={wide}
      $icon={icon}
      $hoverColor={hoverColor}
      $label={label}
      $outlined={outlined}
      type="button"
      aria-label={label ? label : 'Switch'}
      {...htmlButtonProps}
    >
      {loading && (
        <FancySVGAtom
          size={size}
          isPassive
          externalStyle={css`
            animation: ${loadingAnimation} 2s infinite linear;
            padding-right: 0 !important;
          `}
        >
          <SVGLoadingArrows />
        </FancySVGAtom>
      )}
      {(icon && !loading) && (
        <FancySVGAtom size={size} isPassive>
          {icon}
        </FancySVGAtom>
      )}
      {(label && !loading) && <Typography type="button">{label}</Typography>}
    </Button>
  );
}

const defaultProps: IFancyButtonProps = {
  design: 'accent',
  size: 'large',
  align: 'center',
  wide: true,
};

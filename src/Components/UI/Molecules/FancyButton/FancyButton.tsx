import React from 'react';
import { styled } from 'styled-components';
import { IFancyButtonProps } from './IFancyButton.model';

import generateThemeItem, { IGenerateThemeItem } from '../../HelperFunctions/designFunctions/generateThemeItem';
import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import Typography from '../../Atoms/Typography/Typography';
import LoadingSVGArrows from '../../Atoms/LoadingSVGArrows/LoadingSVGArrows';

//this creates the button component and handles the style via generateButton
const Button = styled.button<IGenerateThemeItem>`
  ${(props: IGenerateThemeItem) => generateThemeItem(props)}
`;

//the main react component to generate the fancyButton
export default function FancyButton(props: IFancyButtonProps) {
  const { icon, label, size, wide, design, align, color, hoverColor, outlined, borderRadius, isLoading, ...htmlButtonProps } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Button
      $size={size!}
      $design={design!}
      $borderRadius={borderRadius}
      $align={align}
      $color={color}
      $wide={wide}
      $icon={icon}
      $hoverColor={hoverColor}
      $label={label}
      $outlined={outlined}
      type="button"
      {...htmlButtonProps}
    >
      <LoadingSVGArrows
        isLoading={isLoading}
        size={size}
      />

      {icon && !isLoading && (
        <FancySVGAtom size={size} isPassive>
          {icon}
        </FancySVGAtom>
      )}

      {/* This is needed to hold the button the same size when its loading*/}
      {(isLoading && label ) && <Typography  style={{visibility: 'hidden', width: 0}} type="button">{'.'}</Typography>}
  
      {label && <Typography type="button">{label}</Typography>}
    </Button>
  );
}

const defaultProps: IFancyButtonProps = {
  design: 'accent',
  size: 'lg',
  align: 'center',
};

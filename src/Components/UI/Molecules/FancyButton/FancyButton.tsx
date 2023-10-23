import React from 'react';
import { styled } from 'styled-components';
import { IFancyButtonProps } from './IFancyButton.model';

import generateThemeItem, { IGenerateThemeItem } from '../../HelperFunctions/designFunctions/generateThemeItem';
import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import Typography from '../../Atoms/Typography/Typography';
import LoadingSVGArrows from '../../Atoms/LoadingSVGArrows/LoadingSVGArrows';
import FancyContent from '../FancyContent/FancyContent';

//this creates the button component and handles the style via generateButton
const Button = styled.button<IGenerateThemeItem>`
  ${(props: IGenerateThemeItem) => generateThemeItem(props)}
`;

//the main react component to generate the fancyButton
export default function FancyButton(props: IFancyButtonProps) {
  const {
    icon,
    label,
    size,
    iconSize,
    wide,
    themeType,
    align,
    textColor,
    hoverColor,
    outlined,
    borderRadius,
    isLoading,
    layer,
    iconAlign,
    ...htmlButtonProps
  } = {
    ...defaultProps,
    ...props,
  };

  const showIcon = icon && !isLoading;

  return (
    <Button
      $size={size!}
      $themeType={themeType}
      $borderRadius={borderRadius}
      $align={align}
      $textColor={textColor}
      $wide={wide}
      $icon={icon}
      $hoverColor={hoverColor}
      $label={label}
      $outlined={outlined}
      $layer={layer}
      $iconAlign={iconAlign}
      type="button"
      {...htmlButtonProps}
    >
      {/* {icon && !isLoading && (
        <FancySVGAtom size={iconSize || size} isPassive externalStyle={{ flexShrink: '0' }}>
          {icon}
        </FancySVGAtom>
      )} */}

      <FancyContent text={label} icon={showIcon ? icon : isLoading ? <LoadingSVGArrows isLoading={isLoading} size={size} /> : null} />
      
      {/* {label && <Typography type="button">{label}</Typography>} */}
    </Button>
  );
}

const defaultProps: IFancyButtonProps = {
  themeType: 'accent',
  size: 'lg',
  align: 'center',
};

import React from 'react';
import { css, styled } from 'styled-components';
import { IFancyButtonProps } from './IFancyButton.model';

import LoadingSVGArrows from '../../Atoms/LoadingSVGArrows/LoadingSVGArrows';
import FancyContent from '../../Molecules/FancyContent/FancyContent';
import { IGenerateThemeItem } from '../../HelperFunctions/designFunctions/generateItemTheme/IGenerateThemeItemProps.model';
import generateThemeItem from '../../HelperFunctions/designFunctions/generateItemTheme/generateThemeItem';
import Button from '../../Molecules/Button/Button';
import { generatePadding } from '../../HelperFunctions/designFunctions/generatePaddingForComponent/generatePadding';

//this creates the button component and handles the style via generateButton
const BaaButton = styled.button<IGenerateThemeItem>`
  ${(props: IGenerateThemeItem) => generateThemeItem(props)}
`;

//the main react component to generate the fancyButton

type IFancyButtonProps = {
  isLoading?: boolean;
  label?: string;
  align?: "left" | "right" | "center";
  iconAlign?: "left" | "right";
  icon?: React.ReactNode;
}

type IFancyButton = React.ComponentProps<typeof Button> & IFancyButtonProps;
export default function FancyButton(props: IFancyButton) {
  const { icon, label, isLoading, iconAlign, size, externalStyle, ...htmlButtonProps } = {
    ...defaultProps,
    ...props,
  };
  let aspectRatio;

  const showIcon = icon && !isLoading;
  const alignIcon = iconAlign === 'left' ? 'row' : 'row-reverse';


    //this makes the button a square (1/1) if there is no $label and a $icon

  return (
    <Button size={size} externalStyle={css`${externalStyle} ${aspectRatio}`} oneToOne={Boolean(!label) && Boolean(icon)} {...htmlButtonProps}>
      <FancyContent
        flexDirection={alignIcon}
        text={label}
        icon={showIcon ? icon : isLoading ? <LoadingSVGArrows isLoading={isLoading} size={size} /> : null}
      />
    </Button>
  );
}

const defaultProps: IFancyButton = {
  themeType: 'accent',
  size: 'lg',
  align: 'center',
};

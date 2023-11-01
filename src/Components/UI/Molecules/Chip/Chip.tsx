import React from 'react';
import { CSSProp } from 'styled-components';

import { sizes } from '../FancyContent/utils/sizeSettings';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { StyledChip } from './Chip.style';

export interface IStyledChip {
  size?: keyof typeof sizes;
  outlined?: boolean;
  themeType?: keyof TUiColorsType;
  textColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  layer?: TLayer;
  textLayer?: TLayer;
  isActive?: boolean;
  onClick?: () => void;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
}
// --------------------------------------------------------------------------- //
// --------------- A Simple chip you can put everthing in it  ---------------- //
// --------------------------------------------------------------------------- //
export default function Chip(props: IStyledChip) {
  const { size, outlined, themeType, textColor, layer, textLayer, isActive, externalStyle } = props;

  return (
    <StyledChip
      $isActive={isActive}
      $size={size}
      $outlined={outlined}
      $themeType={themeType}
      $textColor={textColor}
      $layer={layer}
      $textLayer={textLayer}
      $externalStyle={externalStyle}
      role={props.onClick ? 'button' : undefined}
      tabIndex={props.onClick ? 0 : undefined}
      onClick={props.onClick}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (props.onClick && (e.key === 'Enter' || e.key === 'Space')) {
          e.preventDefault();
          props.onClick();
        }
      }}
    >
      {props.children}
    </StyledChip>
  );
}

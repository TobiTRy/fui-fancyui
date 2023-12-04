import React from 'react';
import { CSSProp } from 'styled-components';

import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { StyledChip } from './Chip.style';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';
import { sizes } from '@/components/molecules/FancyContent/utils/sizeSettings';

export interface IStyledChip {
  size?: keyof typeof sizes;
  outlined?: boolean;
  themeType?: TThemeTypes;
  textColor?: TThemeTypesNotTransparent;
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
type TChipProps = IStyledChip & React.HTMLAttributes<HTMLDivElement>;
export default function Chip(props: TChipProps) {
  const { size, outlined, themeType, textColor, layer, textLayer, isActive, externalStyle, ...htmlProps } = props;

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
      tabIndex={0}
      onClick={props.onClick}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (props.onClick && (e.key === 'Enter' || e.key === 'Space')) {
          e.preventDefault();
          props.onClick();
        }
      }}
      {...htmlProps}
    >
      {props.children}
    </StyledChip>
  );
}

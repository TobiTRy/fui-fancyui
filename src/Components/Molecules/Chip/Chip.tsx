import React from 'react';
import { CSSProp } from 'styled-components';

import { sizes } from '../FancyContent/utils/sizeSettings';
import { TThemeTypes, TThemeTypesNotTrasparent } from '@/components/core/interface/TUiColors';
import { TLayer } from '@/components/core/interface/TLayer';
import { StyledChip } from './Chip.style';

export interface IStyledChip {
  size?: keyof typeof sizes;
  outlined?: boolean;
  themeType?: TThemeTypes;
  textColor?: TThemeTypesNotTrasparent;
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

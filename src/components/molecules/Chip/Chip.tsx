import React from 'react';

import { StyledChip } from './Chip.style';
import { IChipProps } from './IChip.model';
// --------------------------------------------------------------------------- //
// --------------- A Simple chip you can put everthing in it  ---------------- //
// --------------------------------------------------------------------------- //
type TChipProps = IChipProps & React.HTMLAttributes<HTMLDivElement>;
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

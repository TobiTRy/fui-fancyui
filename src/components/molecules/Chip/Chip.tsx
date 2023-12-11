/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { IChipProps } from './IChip.model';
import Pill from '@/components/atoms/Pill/Pill';
// --------------------------------------------------------------------------- //
// --------------- A Simple chip you can put everthing in it  ---------------- //
// --------------------------------------------------------------------------- //
type TChipProps = IChipProps & React.ComponentProps<typeof Pill>;
export default function Chip(props: TChipProps) {
  const { size, outlined, themeType, layer, isActive, externalStyle, ...htmlProps } = props;

  return (
    <>
      {/* <StyledChip
        $isActive={isActive}
        $size={size}
        $outlined={outlined}
        $themeType={themeType}
        $layer={layer}
        $externalStyle={externalStyle}
        $textColor={textColor}
        $textLayer={textLayer}
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
      </StyledChip> */}
      <Pill
        outlined={outlined}
        role={props.onClick ? 'button' : undefined}
        tabIndex={0}
        themeType={themeType}
        layer={layer}
        externalStyle={externalStyle}
        {...htmlProps}
      >
        {props.children}
      </Pill>
    </>
  );
}

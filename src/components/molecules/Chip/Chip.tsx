/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { IChipProps } from './IChip.model';

import { FancyPill } from '@/components/atoms/FancyPill';
import { IFancyPillProps } from '@/components/atoms/FancyPill/FancyPill.model';
import { RawLI } from '@/components/atoms/RawLI';
import ChipDeleteButton from './Components/ChipDeleteButton/ChipDeleteButton';
import ChipImg from '@/components/molecules/Chip/Components/ChipImg/ChipImg';
import { FancyContent } from '@/components/molecules/FancyContent';

// --------------------------------------------------------------------------- //
// --------------- A Simple chip you can put everthing in it  ---------------- //
// --------------------------------------------------------------------------- //
export type TChipProps = IChipProps & IFancyPillProps;
export default function Chip(props: TChipProps) {
  const { size, outlined, themeType, layer, isActive, externalStyle, children, ...htmlProps } = props;


  return (
    <RawLI>
      <FancyPill
        isActive={isActive}
        onBlur={props.onBlur}
        outlined={outlined}
        themeType={themeType}
        layer={layer}
        externalStyle={externalStyle}
        role={props.onClick ? 'button' : undefined}
        tabIndex={0}
        {...htmlProps}
      >
        {children}
      </FancyPill>
    </RawLI>
  );
}


Chip.DeleteButton = ChipDeleteButton;
Chip.Img = ChipImg
Chip.Content = FancyContent

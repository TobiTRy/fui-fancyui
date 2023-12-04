import React from 'react';

import { FancyBox } from '@/components/atoms/FancyBox';
import { TLayer } from '@/interface/TLayer';
import { ChipContainer, generateChipListStyle } from './ChipList.style';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TUiColorsSystemMessage } from '@/interface/TUiColorsSystemMessage';

export interface ChipListProps {
  themeType?: Exclude<TThemeTypes, 'transparent'>;
  layer?: TLayer;
  outlined?: boolean;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  systemMessage?: TUiColorsSystemMessage;
}
// --------------------------------------------------------------------------- //
// ---------- The Chiplist is a wrapper for the chips to list them  ---------- //
// --------------------------------------------------------------------------- //
export default function ChipList(props: ChipListProps) {
  const { themeType = 'primary', layer = 1, outlined = false, children, size, systemMessage } = props;

  const generatedStyle = generateChipListStyle(size ?? 'md', systemMessage);

  return (
    <FancyBox themeType={themeType} layer={layer} outlined={outlined} externalStyle={generatedStyle}>
      <ChipContainer>{children}</ChipContainer>
    </FancyBox>
  );
}

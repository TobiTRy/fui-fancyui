import React from 'react';

import { FancyBox } from '@/components/atoms/FancyBox';
import { TLayer } from '@/types/TLayer';
import { ChipContainer, generateChipListStyle } from './ChipList.style';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export interface ChipListProps {
  themeType?: TUiColorsNotTransparent;
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
  const { themeType = 'primary', layer = 2, outlined = false, children, size, systemMessage } = props;

  const generatedStyle = generateChipListStyle(size ?? 'md', systemMessage);

  return (
    <FancyBox themeType={themeType} layer={layer} outlined={outlined} externalStyle={generatedStyle}>
      <ChipContainer>{children}</ChipContainer>
    </FancyBox>
  );
}

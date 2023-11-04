import React from 'react';
import { FancyBox } from '../../Atoms/FancyBox';
import { TSytemMessage, TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { ChipContainer, generateChipListStyle } from './ChipList.style';

export interface ChipListProps {
  themeType?: Exclude<keyof TUiColorsType, 'transparent'>;
  layer?: TLayer;
  outlined?: boolean;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  systemMessage?: TSytemMessage;
}

export default function ChipList(props: ChipListProps) {
  const { themeType = 'primary', layer = 1, outlined = false, children, size, systemMessage } = props;

  const generatedStyle = generateChipListStyle(size ?? 'md', systemMessage);

  return (
    <FancyBox themeType={themeType} layer={layer} outlined={outlined} externalStyle={generatedStyle}>
      <ChipContainer>{children}</ChipContainer>
    </FancyBox>
  );
}

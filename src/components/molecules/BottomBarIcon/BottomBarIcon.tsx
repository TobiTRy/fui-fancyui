import React from 'react';

import { TLayer } from '@/types/TLayer';

import { FancyContent } from '@/components/molecules/FancyContent';
import { ContentWrapper } from './BottomBarIcon.style';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

interface IBottomBarIconProps {
  icon: React.ReactNode;
  label?: string;
  hideLabel?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  id?: string;
}
// --------------------------------------------------------------------------- //
// -------------------- Only a Bottombar Icon with Text  --------------------- //
// --------------------------------------------------------------------------- //
export default function BottomBarIcon(props: IBottomBarIconProps) {
  const { icon, label, isActive, disabled, themeType, layer, hideLabel, id } = props;

  return (
    <ContentWrapper id={id} $disabled={disabled} $isActive={isActive} $themeType={themeType} $layer={layer}>
      <FancyContent direction="column" gapBetweenIcon="0">
        <FancyContent.Icon size={hideLabel ? 'sm' : 'xs'} aria-label={hideLabel ? label : undefined}>
          {icon}
        </FancyContent.Icon>
        {!hideLabel && <FancyContent.Description fontVariant={'smText'}>{label}</FancyContent.Description>}
      </FancyContent>
    </ContentWrapper>
  );
}

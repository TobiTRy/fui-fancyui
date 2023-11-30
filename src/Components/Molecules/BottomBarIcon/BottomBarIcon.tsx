import React from 'react';
import { TThemeTypes } from '@/components/Interface/TUiColors';
import { TLayer } from '@/components/Interface/TLayer';
import FancyContent from '../FancyContent/FancyContent';
import { ContentWrapper } from './BottomBarIcon.style';

interface IBottomBarIconProps {
  icon: React.ReactNode;
  label: string;
  hideLabel?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  themeType?: TThemeTypes;
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
      <FancyContent flexDirection="column" gapBetweenIcon="0">
        <FancyContent.Icon size={hideLabel ? 'xl' : 'md'} aria-label={hideLabel ? label : undefined}>
          {icon}
        </FancyContent.Icon>
        {!hideLabel && <FancyContent.Description fontVariant={'smText'}>{label}</FancyContent.Description>}
      </FancyContent>
    </ContentWrapper>
  );
}

import React from 'react';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import FancyContent from '../FancyContent/FancyContent';
import { ContentWrapper } from './BottomBarIcon.style';

interface IBottomBarIconProps {
  icon: React.ReactNode;
  label?: string;
  isActive?: boolean;
  disabled?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// -------------------- Only a Bottombar Icon with Text  --------------------- //
// --------------------------------------------------------------------------- //
export default function BottomBarIcon(props: IBottomBarIconProps) {
  const { icon, label, isActive, disabled, themeType, layer } = props;

  return (
    <ContentWrapper $disabled={disabled} $isActive={isActive} $themeType={themeType} $layer={layer}>
      <FancyContent flexDirection="column" gapBetweenIcon="0">
        <FancyContent.Icon size={!label ? 'xl' : 'md'}>{icon}</FancyContent.Icon>
        {label && <FancyContent.Description fontVariant={'smText'}>{label}</FancyContent.Description>}
      </FancyContent>
    </ContentWrapper>
  );
}

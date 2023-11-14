import React from 'react';

// Import necessary components and interfaces
import { ContentWrapper, ItemWrapper } from './FancyBottomBarIcon.style';
import FancyContent from '../../Molecules/FancyContent/FancyContent';
import ComponentAsWrapper from '../ComponentAsWrapper/ComponentAsWrapper';
import FancyActionWrapper from '../FancyActionWrapper/FancyActionWrapper';
import { TLayer } from '../../Design/color/generateColorSteps';
import { TUiColorsType } from '../../Design/color/designColor';

// --------------------------------------------------------------------------- //
//The component creates a button that mainly constructed for the navigation bar //
// --------------------------------------------------------------------------- //
const generateContent = (props: IFancyBottomBarIcon) => {
  const { icon, label, isActive, disabled, themeType, layer } = props;

  return (
    <ContentWrapper $disabled={disabled} $isActive={isActive} $themeType={themeType} $layer={layer}>
      <FancyContent flexDirection="column" gapBetweenIcon="0">
        <FancyContent.Icon size="md">{icon}</FancyContent.Icon>
        <FancyContent.Description fontVariant={'smText'}>{label}</FancyContent.Description>
      </FancyContent>
    </ContentWrapper>
  );
};

export type IFancyBottomBarIcon = {
  id?: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  disabled?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  WrapperComponent?: React.ReactElement;
  type?: 'a' | 'button';
};

export default function FancyBottomBarIcon(props: IFancyBottomBarIcon) {
  const { icon, label, isActive, disabled = true, themeType, layer, WrapperComponent, type } = props;

  const Content = generateContent({ icon, label, isActive, disabled, themeType, layer });

  const ContentWrapper = WrapperComponent ? (
    <ComponentAsWrapper wrapper={WrapperComponent} children={Content}></ComponentAsWrapper>
  ) : (
    <FancyActionWrapper as={type} children={Content} />
  );

  // Render the component
  return <ItemWrapper>{ContentWrapper}</ItemWrapper>;
}

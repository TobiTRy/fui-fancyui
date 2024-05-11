import { TDynamicElement } from '@/types/TDynamicElement';
import { StyledItem } from './ColoredText.style';
import { TColoredText } from './TColoredText.model';
import { ElementType } from 'react';

export default function ColoredText<T extends ElementType>(props: TColoredText & TDynamicElement<T>) {
  const { as, children, themeType, layer, externalStyle } = props;

  return (
    <StyledItem as={as} $themeType={themeType} $layer={layer} $externalStyle={externalStyle}>
      {children}
    </StyledItem>
  );
}

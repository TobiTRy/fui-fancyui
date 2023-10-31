// Import necessary dependencies
import React, { ReactElement } from 'react';
import { styled } from 'styled-components';
import { spacingPx } from '../../Design/design';
import FancyContentIcon from './utils/FancyContentIcon';
import { FancyContentDescription, FancyContentTitle } from './utils/FancyContentText';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

// Define the types for the Wrapper component
type TWrapper = IStyledPrefixAndPicker<IFancyContentProps, 'flexDirection' | 'flexAlign' | 'flexJustify' | 'gapBetweenText'>;

// Define the Wrapper component
const Wrapper = styled.span<TWrapper>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
  justify-content: ${({ $flexJustify }) => $flexJustify || 'center'};
  align-items: ${({ $flexAlign }) => $flexAlign || 'center'};
  gap: ${spacingPx.xs};

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ $gapBetweenText }) => $gapBetweenText || spacingPx.xs};
  }
`;

// Define the props for the FancyContent component
interface IFancyContentProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gapBetweenText?: string;
  children?: React.ReactNode;
}
// --------------------------------------------------------------------------- //
// ------- The conent Components handles the Content of The componets -------- //
// -------------------like for a button or chip etc. ------------------------ //
export default function FancyContent(props: IFancyContentProps) {
  const { children, flexAlign, flexDirection } = props;
  let iconElement: ReactElement | null = null;
  const contentGroup: ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === FancyContent.Icon) {
        iconElement = child;
      } else {
        contentGroup.push(child);
      }
    }
  });

  const renderWrapper = iconElement || contentGroup.length > 0;
  return renderWrapper ? (
    <Wrapper $flexAlign={flexAlign} $flexDirection={flexDirection}>
      {iconElement}
      <div className="content">{contentGroup}</div>
    </Wrapper>
  ) : (
    <>{children}</>
  );
}

// Link the subcomponents to the main component
FancyContent.Icon = FancyContentIcon;
FancyContent.Title = FancyContentTitle;
FancyContent.Description = FancyContentDescription;


// Import necessary dependencies
import React, { ReactElement } from 'react';
import { styled } from 'styled-components';
import { spacingPx } from '../../Design/design';
import { FancyContentIcon } from './utils/FancyContentIcon';
import { FancyContentDescription, FancyContentTitle } from './utils/FancyContentText';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

// Define the types for the Wrapper component
type TWrapper = IStyledPrefixAndPicker<
  IFancyContentProps,
  'flexDirection' | 'flexAlign' | 'flexJustify' | 'gapBetweenText' | 'gapBetweenIcon'
>;

// Define the Wrapper component
const Wrapper = styled.span<TWrapper>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
  justify-content: ${({ $flexJustify }) => $flexJustify || 'center'};
  align-items: ${({ $flexAlign }) => $flexAlign || 'center'};
  gap: ${({ $gapBetweenIcon }) => $gapBetweenIcon ?? spacingPx.xs};

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ $gapBetweenText }) => $gapBetweenText ?? spacingPx.xxs};
  }
`;


type TOnlyTextWrapper = IStyledPrefixAndPicker<IFancyContentProps, 'flexDirection' | 'gapBetweenText' | 'flexAlign' | 'flexJustify'>
const OnlyTextWrapper = styled.div<TOnlyTextWrapper>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'column'};
  justify-content: ${({ $flexJustify }) => $flexJustify || 'center'};
  align-items: ${({ $flexAlign }) => $flexAlign || 'flex-start'};
  gap: ${({ $gapBetweenText }) => $gapBetweenText ?? spacingPx.xxs};
`

// Define the props for the FancyContent component
interface IFancyContentProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gapBetweenText?: string;
  gapBetweenIcon?: string;
  children?: React.ReactNode;
}
// --------------------------------------------------------------------------- //
// ------- The conent Components handles the Content of The componets -------- //
// -------------------like for a button or chip etc. ------------------------ //
function FancyContent(props: IFancyContentProps) {
  const { children, flexAlign, flexDirection, flexJustify, gapBetweenText, gapBetweenIcon } = props;
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


  return iconElement ? (
    <Wrapper
      $flexAlign={flexAlign}
      $flexDirection={flexDirection}
      $flexJustify={flexJustify}
      $gapBetweenText={gapBetweenText}
      $gapBetweenIcon={gapBetweenIcon}
    >
      {iconElement}
      {contentGroup.length > 0 && <div className="content">{contentGroup}</div>}
    </Wrapper>
  ) : (
    <OnlyTextWrapper>{children}</OnlyTextWrapper>
  );
}

// Link the subcomponents to the main component
FancyContent.Icon = FancyContentIcon;
FancyContent.Title = FancyContentTitle;
FancyContent.Description = FancyContentDescription;

export default FancyContent;

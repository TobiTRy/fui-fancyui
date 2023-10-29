// Import necessary dependencies
import React from 'react';
import { styled } from 'styled-components';
import { spacingPx } from '../../Design/design';
import FancyContentIcon from './utils/FancyContentIcon';
import FancyContentText from './utils/FancyContentText';

// Define the types for the Wrapper component
type TWrapper = Pick<IFancyContentProps, 'flexDirection' | 'flexAlign' | 'flexJustify'>;

// Define the Wrapper component
const Wrapper = styled.span<TWrapper>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ flexJustify }) => flexJustify || 'center'};
  align-items: ${({ flexAlign }) => flexAlign || 'center'};
  gap: ${spacingPx.xs};
`;

// Define the props for the FancyContent component
interface IFancyContentProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  children?: React.ReactNode;
}

// --------------------------------------------------------------------------- //
// ------- The conent Components handles the Content of The componets -------- //
// -------------------like for a button or chip etc. ------------------------ //
export default function FancyContent(props: IFancyContentProps) {
  const { children, flexAlign, flexDirection } = props;
  let hasIcon = false;
  let hasText = false;

  // Check if the children are valid and if they are of the type FancyContentIcon or FancyContentText
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && typeof child.type === 'function') {
      if (child.type.name === 'FancyContentIcon') {
        hasIcon = true;
      } else if (child.type.name === 'FancyContentText') {
        hasText = true;
      }
    }
  });

  return (
    <>
      {/* If it has a icon and no text dont put it in a container */}
      {hasIcon && !hasText ? (
        children
      ) : (
        <Wrapper flexAlign={flexAlign} flexDirection={flexDirection}>
          {children}
        </Wrapper>
      )}
    </>
  );
}

// Link the subcomponents to the main component
FancyContent.Text = FancyContentText;
FancyContent.Icon = FancyContentIcon;

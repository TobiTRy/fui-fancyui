// Import necessary dependencies
import React, { ReactElement } from 'react';

import { FancyContentIcon } from './utils/FancyContentIcon';
import { FancyContentDescription, FancyContentTitle } from './utils/FancyContentText';
import { OnlyTextWrapper, Wrapper } from './FancyContent.style';
import { TFancyContentProps } from '@/components/molecules/FancyContent/FancyContent.model';

// --------------------------------------------------------------------------- //
// ------- The conent Components handles the Content of The componets -------- //
// -------------------like for a button or chip etc. ------------------------ //
function FancyContent(props: TFancyContentProps & React.HTMLAttributes<HTMLSpanElement>) {
  const {
    children,
    flexAlign,
    flexDirection,
    flexJustify,
    gapBetweenText,
    gapBetweenIcon,
    themeType,
    layer,
    ...htmlProps
  } = props;

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
      $themeType={themeType}
      $layer={layer}
      {...htmlProps}
    >
      {iconElement}
      {contentGroup.length > 0 && <span className="content">{contentGroup}</span>}
    </Wrapper>
  ) : (
    <OnlyTextWrapper
      $themeType={themeType}
      $layer={layer}
      $flexAlign={flexAlign}
      $flexDirection={flexDirection}
      $flexJustify={flexJustify}
      $gapBetweenText={gapBetweenText}
      {...htmlProps}
    >
      {children}
    </OnlyTextWrapper>
  );
}

// Link the subcomponents to the main component
FancyContent.Icon = FancyContentIcon;
FancyContent.Title = FancyContentTitle;
FancyContent.Description = FancyContentDescription;

// Export the main component is needed here for the storybook to work 🤦‍♂️
export default FancyContent;

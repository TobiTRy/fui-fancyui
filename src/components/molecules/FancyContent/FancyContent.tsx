import React, { ReactElement } from 'react';

import { OnlyTextWrapper, Wrapper } from './FancyContent.style';
import { TFancyContentHTMLAttrs } from './FancyContent.model';
import FancyContentIcon from '@/components/molecules/FancyContent/utils/FancyContentIcon';
import FancyContentTitle from '@/components/molecules/FancyContent/utils/FancyContentText';
import FancyContentDescription from '@/components/molecules/FancyContent/utils/FancyContentDescription';
import FancyContentImage from '@/components/molecules/FancyContent/utils/FancyContentImage';

// --------------------------------------------------------------------------- //
// ------- The conent Components handles the Content of The componets -------- //
// -------------------like for a button or chip etc. ------------------------ //
function FancyContent(props: TFancyContentHTMLAttrs) {
  const {
    children,
    align,
    direction,
    justify,
    gapBetweenText,
    gapBetweenIcon,
    themeType,
    layer,
    externalStyle,
    alignIcon = 'left',
    directionTextGroup = 'column',
    alignTextGroup = 'flex-start',
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
      $align={align}
      $direction={direction}
      $justify={justify}
      $gapBetweenText={gapBetweenText}
      $gapBetweenIcon={gapBetweenIcon}
      $directionTextGroup={directionTextGroup}
      $themeType={themeType}
      $layer={layer}
      $alignTextGroup={alignTextGroup}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {alignIcon === 'left' ? iconElement : ''}
      {contentGroup.length > 0 && <span className="content">{contentGroup}</span>}
      {alignIcon === 'right' ? iconElement : ''}
    </Wrapper>
  ) : (
    <OnlyTextWrapper
      $themeType={themeType}
      $layer={layer}
      $align={align}
      $direction={direction}
      $justify={justify}
      $gapBetweenText={gapBetweenText}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </OnlyTextWrapper>
  );
}

// Link the subcomponents to the main component
FancyContent.Image = FancyContentImage;
FancyContent.Icon = FancyContentIcon;
FancyContent.Title = FancyContentTitle;
FancyContent.Description = FancyContentDescription;

// Export the main component is needed here for the storybook to work 🤦‍♂️
export default FancyContent;

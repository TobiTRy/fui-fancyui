'use client';

import React, { ReactElement } from 'react';

import { OnlyTextWrapper, Wrapper } from './FancyContent.style';
import { TFancyContentHTMLAttrs } from './FancyContent.model';
import FancyContentIcon from '@/components/molecules/FancyContent/utils/FancyContentIcon';
import FancyContentTitle from '@/components/molecules/FancyContent/utils/FancyContentText';
import FancyContentDescription from '@/components/molecules/FancyContent/utils/FancyContentDescription';
import FancyContentImage from '@/components/molecules/FancyContent/utils/FancyContentImage';
import { TComponentSizesMid } from '@/types/TComponentSizes';

// --------------------------------------------------------------------------- //
// ------- The conent Components handles the Content of The componets -------- //
// -------------------like for a button or chip etc. ------------------------ //
function FancyContent(props: TFancyContentHTMLAttrs) {
  const {
    children,
    layoutMode = 'auto',
    gapBetweenText,
    gapBetweenIcon,
    themeType,
    layer,
    externalStyle,
    alignIcon = 'left',
    justify,
    align,
    wide = true,
    sizeC: sizeCProps,
    ...htmlProps
  } = props;

  const sizeC: TComponentSizesMid = (sizeCProps as TComponentSizesMid) || 'md';

  let iconElement: ReactElement | null = null;
  let titleElement: ReactElement | null = null;
  let descriptionElement: ReactElement | null = null;
  const otherElements: ReactElement[] = [];

  // Classify children into icon, title, description, and others
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as { className?: string; sizeC?: TComponentSizesMid };

      if (child.type === FancyContent.Icon || child.type === FancyContent.Image) {
        iconElement = React.cloneElement(child as ReactElement<{ className?: string; sizeC?: TComponentSizesMid }>, {
          ...childProps,
          className: `${childProps.className || ''} icon`.trim(),
          sizeC: (childProps.sizeC as TComponentSizesMid) || sizeC,
        });
      } else if (child.type === FancyContent.Title) {
        titleElement = React.cloneElement(child as ReactElement<{ className?: string; sizeC?: TComponentSizesMid }>, {
          ...childProps,
          className: `${childProps.className || ''} title`.trim(),
          sizeC: (childProps.sizeC as TComponentSizesMid) || sizeC,
        });
      } else if (child.type === FancyContent.Description) {
        descriptionElement = React.cloneElement(
          child as ReactElement<{ className?: string; sizeC?: TComponentSizesMid }>,
          {
            ...childProps,
            className: `${childProps.className || ''} description`.trim(),
            sizeC: (childProps.sizeC as TComponentSizesMid) ?? sizeC,
          }
        );
      } else {
        otherElements.push(child);
      }
    }
  });

  const hasIcon = iconElement !== null;
  const hasTitle = titleElement !== null;
  const hasDescription = descriptionElement !== null;

  // Handle case where description should take the place of title (no title, but has description)
  const descriptionAsTitle = !hasTitle && hasDescription;

  // If description should be used as title, update its class
  if (descriptionAsTitle && descriptionElement) {
    const element = descriptionElement as React.ReactElement<{ className?: string; sizeC?: TComponentSizesMid }>;
    descriptionElement = React.cloneElement(element, {
      ...element.props,
      className: `${element.props.className || ''} title`.replace('description', '').trim(),
      sizeC: (element.props.sizeC as TComponentSizesMid) || sizeC,
    });
  }

  // Check if only a single element is present (no need for complex grid layout)
  const hasOnlyIcon = hasIcon && !titleElement && !descriptionElement && otherElements.length === 0;
  const hasOnlyTitle = titleElement && !hasIcon && !descriptionElement && otherElements.length === 0;
  const hasOnlyDescription = descriptionElement && !hasIcon && !titleElement && otherElements.length === 0;
  const hasSingleElement = hasOnlyIcon || hasOnlyTitle || hasOnlyDescription;

  // If only a single element is present, use simple wrapper without gaps
  if (hasSingleElement) {
    return (
      <OnlyTextWrapper
        $themeType={themeType}
        $layer={layer}
        $gapBetweenText={gapBetweenText}
        $layoutMode={layoutMode}
        $externalStyle={externalStyle}
        $justify={justify}
        $align={align}
        $wide={wide}
        {...htmlProps}
      >
        {iconElement}
        {titleElement}
        {descriptionElement}
      </OnlyTextWrapper>
    );
  }

  // If there's an icon with structured content, use the grid wrapper
  if (hasIcon || titleElement || descriptionElement) {
    return (
      <Wrapper
        $layoutMode={layoutMode}
        $hasIcon={hasIcon}
        $hasTitle={hasTitle || descriptionAsTitle}
        $hasDescription={hasDescription && !descriptionAsTitle}
        $gapBetweenText={gapBetweenText}
        $gapBetweenIcon={gapBetweenIcon ?? '2xs'}
        $themeType={themeType}
        $layer={layer}
        $externalStyle={externalStyle}
        $alignIcon={alignIcon}
        $justify={justify}
        $align={align}
        {...htmlProps}
      >
        {alignIcon === 'left' && iconElement}
        {titleElement}
        {descriptionElement}
        {alignIcon === 'right' && iconElement}
        {otherElements.length > 0 && otherElements}
      </Wrapper>
    );
  }

  // Fallback to text-only wrapper for simple content
  return (
    <OnlyTextWrapper
      $themeType={themeType}
      $layer={layer}
      $gapBetweenText={gapBetweenText}
      $layoutMode={layoutMode}
      $externalStyle={externalStyle}
      $justify={justify}
      $align={align}
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

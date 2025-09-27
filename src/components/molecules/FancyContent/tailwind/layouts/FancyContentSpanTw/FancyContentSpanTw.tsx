import React, { ReactElement } from 'react';
import { TFancyContentSpanTwHTMLAttrs } from '../../types';
import FancyContentIconTw from '../../components/FancyContentIconTw';
import FancyContentTitleTw from '../../components/FancyContentTitleTw';
import FancyContentDescriptionTw from '../../components/FancyContentDescriptionTw';
import {
  getContainerClasses,
  getGridClasses,
  getIconWrapperClasses,
  getTitleWrapperClasses,
  getDescriptionWrapperClasses,
} from './FancyContentSpanTw.style';

/**
 * FancyContentSpanTw - Span layout where icon spans both title and description rows
 *
 * This layout creates a 2-column grid where:
 * - Icon takes up the full height of both title and description
 * - Title and description are stacked in the second column
 * - Icon is vertically centered against the combined height
 *
 * @param gapIconContent Gap between icon and content block (Tailwind spacing scale)
 * @param gapTitleDescription Gap between title and description (Tailwind spacing scale)
 * @param alignIcon Position of icon (left or right)
 * @param wide If true, content takes full width
 * @param className Additional CSS classes
 * @param children FancyContentTw.Icon, .Title, and .Description components
 */
export default function FancyContentSpanTw(props: TFancyContentSpanTwHTMLAttrs) {
  const {
    children,
    gapIconContent = 2, // Default to gap-2 (8px)
    gapTitleDescription = 1, // Default to gap-1 (4px)
    alignIcon = 'left',
    wide = true,
    className,
    sizeC = 'md',
    ...htmlProps
  } = props;

  // Process children to extract Icon, Title, and Description
  let iconElement: ReactElement | null = null;
  let titleElement: ReactElement | null = null;
  let descriptionElement: ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === FancyContentIconTw) {
        iconElement = React.cloneElement(child, { sizeC });
      } else if (child.type === FancyContentTitleTw) {
        titleElement = React.cloneElement(child, { sizeC });
      } else if (child.type === FancyContentDescriptionTw) {
        descriptionElement = React.cloneElement(child, { sizeC });
      }
    }
  });

  // Check what content we have
  const hasIcon = !!iconElement;
  const hasTitle = !!titleElement;
  const hasDescription = !!descriptionElement;

  // Get all classes
  const containerClasses = getContainerClasses(wide);
  const gridClasses = getGridClasses(hasIcon, hasTitle, hasDescription, alignIcon, gapIconContent, gapTitleDescription);
  const allClasses = className
    ? `${containerClasses} ${gridClasses} ${className}`
    : `${containerClasses} ${gridClasses}`;

  return (
    <div className={allClasses} {...htmlProps}>
      {/* Render elements based on alignment and presence */}
      {alignIcon === 'left' && iconElement && <div className={getIconWrapperClasses()}>{iconElement}</div>}

      {/* Title */}
      {titleElement && <div className={getTitleWrapperClasses()}>{titleElement}</div>}

      {/* Description */}
      {descriptionElement && (
        <div className={getDescriptionWrapperClasses(hasTitle, hasIcon, gapTitleDescription)}>{descriptionElement}</div>
      )}

      {alignIcon === 'right' && iconElement && <div className={getIconWrapperClasses()}>{iconElement}</div>}
    </div>
  );
}

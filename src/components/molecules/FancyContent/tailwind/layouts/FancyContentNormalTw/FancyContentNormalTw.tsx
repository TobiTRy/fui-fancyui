import React, { ReactElement } from 'react';
import { TFancyContentTwHTMLAttrs } from '../../types';
import FancyContentIconTw from '../../components/FancyContentIconTw';
import FancyContentTitleTw from '../../components/FancyContentTitleTw';
import FancyContentDescriptionTw from '../../components/FancyContentDescriptionTw';
import {
  getContainerClasses,
  getGridClasses,
  getIconWrapperClasses,
  getTitleWrapperClasses,
  getDescriptionWrapperClasses,
} from './FancyContentNormalTw.style';

/**
 * FancyContentNormalTw - Normal 2x2 grid layout
 *
 * This layout creates a 2x2 grid where:
 * - Icon and title are on the first row
 * - Description spans the full width on the second row
 * - If no description, only one row is used
 *
 * @param gapBetweenIcon Gap between icon and text content (Tailwind spacing scale)
 * @param gapBetweenText Gap between title and description (Tailwind spacing scale)
 * @param alignIcon Position of icon (left or right)
 * @param wide If true, content takes full width
 * @param className Additional CSS classes
 * @param children FancyContentTw.Icon, .Title, and .Description components
 */
export default function FancyContentNormalTw(props: TFancyContentTwHTMLAttrs) {
  const {
    children,
    gapBetweenIcon = 2, // Default to gap-2 (8px)
    gapBetweenText = 1, // Default to gap-1 (4px)
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

  // Configure grid based on content and alignment
  const hasDescription = !!descriptionElement;
  const hasIcon = !!iconElement;
  const hasTitle = !!titleElement;

  // Get all classes
  const containerClasses = getContainerClasses(wide);
  const gridClasses = getGridClasses(hasIcon, hasTitle, hasDescription, alignIcon, gapBetweenIcon, gapBetweenText);
  const allClasses = className
    ? `${containerClasses} ${gridClasses} ${className}`
    : `${containerClasses} ${gridClasses}`;

  return (
    <div className={allClasses} {...htmlProps}>
      {/* First row: Icon and Title */}
      {alignIcon === 'left' && iconElement && <div className={getIconWrapperClasses()}>{iconElement}</div>}

      {titleElement && <div className={getTitleWrapperClasses()}>{titleElement}</div>}

      {alignIcon === 'right' && iconElement && <div className={getIconWrapperClasses()}>{iconElement}</div>}

      {/* Second row: Description (spans full width) */}
      {descriptionElement && (
        <div className={getDescriptionWrapperClasses(hasIcon, hasTitle)}>{descriptionElement}</div>
      )}
    </div>
  );
}

FancyContentNormalTw.Icon = FancyContentIconTw;
FancyContentNormalTw.Title = FancyContentTitleTw;
FancyContentNormalTw.Description = FancyContentDescriptionTw;

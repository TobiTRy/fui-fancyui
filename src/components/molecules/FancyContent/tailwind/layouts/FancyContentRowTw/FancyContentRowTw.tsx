import React, { ReactElement } from 'react';
import { TFancyContentRowTwHTMLAttrs } from '../../types';
import FancyContentIconTw from '../../components/FancyContentIconTw';
import FancyContentTitleTw from '../../components/FancyContentTitleTw';
import FancyContentDescriptionTw from '../../components/FancyContentDescriptionTw';
import { getContainerClasses, getElementWrapperClasses } from './FancyContentRowTw.style';

/**
 * FancyContentRowTw - Horizontal row layout
 *
 * This layout arranges all elements horizontally in a single row:
 * - Icon | Title | Description (all in one row)
 * - Elements are center-aligned vertically
 * - Icon position can be left or right
 *
 * @param gapBetweenElements Gap between all elements in the row (Tailwind spacing scale)
 * @param alignIcon Position of icon (left or right)
 * @param wide If true, content takes full width
 * @param className Additional CSS classes
 * @param children FancyContentTw.Icon, .Title, and .Description components
 */
export default function FancyContentRowTw(props: TFancyContentRowTwHTMLAttrs) {
  const {
    children,
    gapBetweenElements = 2, // Default to gap-2 (8px)
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

  // Count elements to determine if we need gaps
  const hasMultipleElements = [iconElement, titleElement, descriptionElement].filter(Boolean).length > 1;

  // Get container classes
  const containerClasses = getContainerClasses(wide, gapBetweenElements, hasMultipleElements);
  const allClasses = className ? `${containerClasses} ${className}` : containerClasses;

  // Create ordered elements array based on icon alignment
  const orderedElements: ReactElement[] = [];

  if (alignIcon === 'left') {
    if (iconElement) orderedElements.push(iconElement);
    if (titleElement) orderedElements.push(titleElement);
    if (descriptionElement) orderedElements.push(descriptionElement);
  } else {
    if (titleElement) orderedElements.push(titleElement);
    if (descriptionElement) orderedElements.push(descriptionElement);
    if (iconElement) orderedElements.push(iconElement);
  }

  return (
    <div className={allClasses} {...htmlProps}>
      {orderedElements.map((element, index) => (
        <div key={index} className={getElementWrapperClasses()}>
          {element}
        </div>
      ))}
    </div>
  );
}

import React, { ReactElement } from 'react';
import { TFancyContentInlineTwHTMLAttrs } from '../../types';
import FancyContentIconTw from '../../components/FancyContentIconTw';
import FancyContentTitleTw from '../../components/FancyContentTitleTw';
import FancyContentDescriptionTw from '../../components/FancyContentDescriptionTw';
import {
  getContainerClasses,
  getInlineRowClasses,
  getElementWrapperClasses,
  getDescriptionWrapperClasses,
} from './FancyContentInlineTw.style';

/**
 * FancyContentInlineTw - Inline layout with description below
 *
 * This layout creates:
 * - First row: Icon and title on the same line
 * - Second row: Description spans the full width below
 * - If no description, only one row is used
 *
 * @param gapIconTitle Gap between icon and title (Tailwind spacing scale)
 * @param gapTitleDescription Gap between title row and description (Tailwind spacing scale)
 * @param alignIcon Position of icon (left or right)
 * @param wide If true, content takes full width
 * @param className Additional CSS classes
 * @param children FancyContentTw.Icon, .Title, and .Description components
 */
export default function FancyContentInlineTw(props: TFancyContentInlineTwHTMLAttrs) {
  const {
    children,
    gapIconTitle = 2, // Default to gap-2 (8px)
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
  const hasContent = !!(iconElement || titleElement);
  const hasDescription = !!descriptionElement;

  // Get container classes
  const containerClasses = getContainerClasses(wide, gapTitleDescription, hasContent, hasDescription);
  const allClasses = className ? `${containerClasses} ${className}` : containerClasses;

  // Get inline row classes
  const inlineRowClasses = getInlineRowClasses(gapIconTitle, !!iconElement, !!titleElement);

  // Create ordered elements for the inline row based on icon alignment
  const inlineElements: ReactElement[] = [];

  if (alignIcon === 'left') {
    if (iconElement) inlineElements.push(iconElement);
    if (titleElement) inlineElements.push(titleElement);
  } else {
    if (titleElement) inlineElements.push(titleElement);
    if (iconElement) inlineElements.push(iconElement);
  }

  return (
    <div className={allClasses} {...htmlProps}>
      {/* First row: Icon and Title inline */}
      {inlineElements.length > 0 && (
        <div className={inlineRowClasses}>
          {inlineElements.map((element: ReactElement, index: number) => (
            <div key={index} className={getElementWrapperClasses()}>
              {element}
            </div>
          ))}
        </div>
      )}

      {/* Second row: Description spans full width */}
      {descriptionElement && <div className={getDescriptionWrapperClasses()}>{descriptionElement}</div>}
    </div>
  );
}

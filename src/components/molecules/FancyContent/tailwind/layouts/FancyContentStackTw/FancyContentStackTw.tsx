import React, { ReactElement } from 'react';
import { TFancyContentTwHTMLAttrs } from '../../types';
import FancyContentIconTw from '../../components/FancyContentIconTw';
import FancyContentTitleTw from '../../components/FancyContentTitleTw';
import FancyContentDescriptionTw from '../../components/FancyContentDescriptionTw';
import {
  getContainerClasses,
  getIconWrapperClasses,
  getTitleWrapperClasses,
  getDescriptionWrapperClasses,
  getTextClasses,
} from './FancyContentStackTw.style';

/**
 * FancyContentStackTw - Vertical stack layout
 *
 * This layout stacks all elements vertically in a single column:
 * - Icon (centered)
 * - Title (centered)
 * - Description (centered)
 * All elements are center-aligned both horizontally and vertically
 *
 * @param gapBetweenIcon Gap between elements (Tailwind spacing scale)
 * @param wide If true, content takes full width
 * @param className Additional CSS classes
 * @param children FancyContentTw.Icon, .Title, and .Description components
 */
export default function FancyContentStackTw(props: TFancyContentTwHTMLAttrs) {
  const {
    children,
    gapBetweenIcon = 2, // Default to gap-2 (8px) - using this for all gaps in stack layout
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

  // Count elements to determine grid rows
  const elements = [iconElement, titleElement, descriptionElement].filter(Boolean);
  const rowCount = elements.length;

  // Get container classes
  const containerClasses = getContainerClasses(wide, gapBetweenIcon, rowCount);
  const allClasses = className ? `${containerClasses} ${className}` : containerClasses;

  return (
    <div className={allClasses} {...htmlProps}>
      {/* Icon */}
      {iconElement && <div className={getIconWrapperClasses()}>{iconElement}</div>}

      {/* Title */}
      {titleElement && (
        <div className={getTitleWrapperClasses()}>
          {React.cloneElement(titleElement, {
            className: getTextClasses((titleElement.props as { className?: string }).className),
          })}
        </div>
      )}

      {/* Description */}
      {descriptionElement && (
        <div className={getDescriptionWrapperClasses()}>
          {React.cloneElement(descriptionElement, {
            className: getTextClasses((descriptionElement.props as { className?: string }).className),
          })}
        </div>
      )}
    </div>
  );
}

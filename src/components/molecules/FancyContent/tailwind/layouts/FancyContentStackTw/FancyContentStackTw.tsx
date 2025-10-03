import React, { ReactElement } from 'react';
import { TFancyContentStackTwHTMLAttrs } from '../../types';
import FancyContentIconTw from '../../components/FancyContentIconTw';
import FancyContentTitleTw from '../../components/FancyContentTitleTw';
import FancyContentDescriptionTw from '../../components/FancyContentDescriptionTw';
import type { TFancyContentTwTitleProps } from '../../components/FancyContentTitleTw/FancyContentTitleTw.model';
import type { TFancyContentTwDescriptionProps } from '../../components/FancyContentDescriptionTw/FancyContentDescriptionTw.model';
import {
  getContainerClasses,
  getIconWrapperClasses,
  getTitleWrapperClasses,
  getDescriptionWrapperClasses,
  getTextClasses,
} from './FancyContentStackTw.style';
import { getSpacingClass } from '@/utils/tailwind-bridge';

/**
 * FancyContentStackTw - Vertical stack layout
 *
 * This layout stacks all elements vertically in a single column:
 * - Icon (centered)
 * - Title (centered)
 * - Description (centered)
 * All elements are center-aligned both horizontally and vertically
 *
 * @param gapIconTitle Gap between icon and title (Tailwind spacing scale)
 * @param gapTitleDescription Gap between title and description (Tailwind spacing scale)
 * @param wide If true, content takes full width
 * @param className Additional CSS classes
 * @param children FancyContentTw.Icon, .Title, and .Description components
 */
export default function FancyContentStackTw(props: TFancyContentStackTwHTMLAttrs) {
  const {
    children,
    gapIconTitle = 2,
    gapTitleDescription = 2,
    wide = true,
    className,
    sizeC = 'md',
    ...htmlProps
  } = props;

  // Process children to extract Icon, Title, and Description
  let iconElement: ReactElement | null = null;
  let titleElement: ReactElement | null = null;
  let descriptionElement: ReactElement | null = null;
  let titleClassName: string | undefined = undefined;
  let descriptionClassName: string | undefined = undefined;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === FancyContentIconTw) {
        iconElement = React.cloneElement(child, { sizeC });
      } else if (child.type === FancyContentTitleTw) {
        titleClassName = (child.props as TFancyContentTwTitleProps)?.className;
        titleElement = React.cloneElement(child, { sizeC });
      } else if (child.type === FancyContentDescriptionTw) {
        descriptionClassName = (child.props as TFancyContentTwDescriptionProps)?.className;
        descriptionElement = React.cloneElement(child, { sizeC });
      }
    }
  });

  // Count elements to determine grid rows
  const elements = [iconElement, titleElement, descriptionElement].filter(Boolean);
  const rowCount = elements.length;

  // Get container classes - for stack layout with individual gaps, we don't use container gap
  const containerClasses = getContainerClasses(wide, 0, rowCount);
  const allClasses = className ? `${containerClasses} ${className}` : containerClasses;

  // Generate margin classes for individual gaps
  const titleMarginTop = iconElement && titleElement ? getSpacingClass(gapIconTitle, 'mt') : '';
  const descriptionMarginTop =
    titleElement && descriptionElement
      ? getSpacingClass(gapTitleDescription, 'mt')
      : iconElement && descriptionElement && !titleElement
        ? getSpacingClass(gapIconTitle, 'mt')
        : '';

  return (
    <div className={allClasses} {...htmlProps}>
      {/* Icon */}
      {iconElement && <div className={getIconWrapperClasses()}>{iconElement}</div>}

      {/* Title */}
      {titleElement && (
        <div className={`${getTitleWrapperClasses()} ${titleMarginTop}`}>
          {React.cloneElement(titleElement, {
            className: getTextClasses(titleClassName),
          })}
        </div>
      )}

      {/* Description */}
      {descriptionElement && (
        <div className={`${getDescriptionWrapperClasses()} ${descriptionMarginTop}`}>
          {React.cloneElement(descriptionElement, {
            className: getTextClasses(descriptionClassName),
          })}
        </div>
      )}
    </div>
  );
}

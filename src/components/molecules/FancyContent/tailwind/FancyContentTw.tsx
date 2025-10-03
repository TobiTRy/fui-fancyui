import React from 'react';
import { TFancyContentTwHTMLAttrs } from './types';

// Import layout components
import FancyContentNormalTw from './layouts/FancyContentNormalTw';
import FancyContentStackTw from './layouts/FancyContentStackTw';
import FancyContentRowTw from './layouts/FancyContentRowTw';
import FancyContentSpanTw from './layouts/FancyContentSpanTw';
import FancyContentInlineTw from './layouts/FancyContentInlineTw';

// Import subcomponents
import FancyContentIconTw from './components/FancyContentIconTw';
import FancyContentTitleTw from './components/FancyContentTitleTw';
import FancyContentDescriptionTw from './components/FancyContentDescriptionTw';

/**
 * FancyContentTw - Tailwind version of FancyContent
 *
 * A flexible content component that automatically selects the appropriate layout
 * based on the layoutMode prop. Uses Tailwind CSS classes for styling instead
 * of styled-components.
 *
 * @param layoutMode Layout type: 'normal', 'stack', 'row', 'span', 'inline', or 'auto'
 * @param gapBetweenIcon Gap between icon and text content (Tailwind spacing scale)
 * @param gapBetweenText Gap between title and description (Tailwind spacing scale)
 * @param alignIcon Position of icon relative to content ('left' or 'right')
 * @param justify Horizontal alignment of all content
 * @param align Vertical alignment of all content
 * @param wide If true, content takes full width
 * @param sizeC Component size
 * @param className Additional CSS classes
 * @param children FancyContentTw.Icon, .Title, and .Description components
 */
function FancyContentTw(props: TFancyContentTwHTMLAttrs) {
  const { layoutMode = 'auto', children, ...restProps } = props;

  // Auto-detect layout mode based on content if 'auto' is specified
  let actualLayoutMode = layoutMode;

  if (layoutMode === 'auto') {
    // Count child types to determine best layout
    let hasIcon = false;
    let hasTitle = false;
    let hasDescription = false;

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === FancyContentIconTw) hasIcon = true;
        else if (child.type === FancyContentTitleTw) hasTitle = true;
        else if (child.type === FancyContentDescriptionTw) hasDescription = true;
      }
    });

    // Auto-select layout based on content
    if (hasIcon && hasTitle && hasDescription) {
      actualLayoutMode = 'normal'; // Default to normal for full content
    } else if (hasIcon && (hasTitle || hasDescription)) {
      actualLayoutMode = 'inline'; // Icon with single text element
    } else if (hasTitle && hasDescription) {
      actualLayoutMode = 'stack'; // Text-only, stacked
    } else {
      actualLayoutMode = 'normal'; // Fallback
    }
  }

  // Select the appropriate layout component
  const layoutProps = { children, ...restProps };

  switch (actualLayoutMode) {
    case 'stack':
      return <FancyContentStackTw {...layoutProps} />;
    case 'row':
      return <FancyContentRowTw {...layoutProps} />;
    case 'span':
      return <FancyContentSpanTw {...layoutProps} />;
    case 'inline':
      return <FancyContentInlineTw {...layoutProps} />;
    case 'normal':
    default:
      return <FancyContentNormalTw {...layoutProps} />;
  }
}

// Attach subcomponents to the main component for the same API as original FancyContent
FancyContentTw.Icon = FancyContentIconTw;
FancyContentTw.Title = FancyContentTitleTw;
FancyContentTw.Description = FancyContentDescriptionTw;

// Export individual layout components for direct use
export {
  FancyContentNormalTw,
  FancyContentStackTw,
  FancyContentRowTw,
  FancyContentSpanTw,
  FancyContentInlineTw,
  FancyContentIconTw,
  FancyContentTitleTw,
  FancyContentDescriptionTw,
};

// Export the main component
export default FancyContentTw;

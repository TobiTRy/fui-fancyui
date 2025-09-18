'use client';

import { Typography } from '@/components/atoms/Typography';
import { FancyButton } from '@/components/organisms/FancyButton';
import type { HeaderNavigationWithTitleProps } from './HeaderNavigationWithTitle.model';
import { getContainerClasses, getIconWrapperClasses } from './HeaderNavigationWithTitle.style';
import { NAVIGATION_ICONS, defaultButtonProps, sizeSettings } from './settings';

/**
 * A header navigation component that displays a title with optional back and forward navigation buttons.
 * The component provides a consistent layout with centered title text and symmetrical button placement.
 * Button sizes and typography automatically scale based on the component size variant.
 */
export default function HeaderNavigationWithTitle(props: HeaderNavigationWithTitleProps) {
  const { title, sizeC = 'md', backButton, forwardButton } = props;

  const { buttonSize, titleSize } = sizeSettings[sizeC];

  return (
    <div className={getContainerClasses()}>
      {/* --- Back Button --- */}
      <div className={getIconWrapperClasses(buttonSize)}>
        {backButton && (
          <FancyButton
            type="button"
            sizeC={backButton?.sizeC ?? buttonSize}
            icon={NAVIGATION_ICONS.back}
            {...defaultButtonProps}
            {...backButton}
          />
        )}
      </div>

      {/* --- Title --- */}
      <Typography variant={titleSize} fontWeight="bold">
        {title}
      </Typography>

      {/* --- Forward Button --- */}
      <div className={getIconWrapperClasses(buttonSize)}>
        {forwardButton && (
          <FancyButton
            type="button"
            sizeC={forwardButton?.sizeC ?? buttonSize}
            icon={NAVIGATION_ICONS.forward}
            {...defaultButtonProps}
            {...forwardButton}
          />
        )}
      </div>
    </div>
  );
}

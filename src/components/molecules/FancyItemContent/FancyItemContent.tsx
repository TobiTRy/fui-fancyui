'use client';

import FancyContent from '@/components/molecules/FancyContent/FancyContent';
import { TFancyItemContentWithHTMLProps } from './TFancyItemContent.model';

/**
 * Reusable item content component that encapsulates common FancyContent logic
 * Used to display items with title, description, image/icon in a consistent way
 *
 * @param props Component props containing item data and display options
 * @param props.item The item data to display
 * @param props.layoutMode Layout mode for FancyContent (span or div)
 * @param props.gapBetweenIcon Gap between icon and text content
 * @param props.gapBetweenText Gap between title and description
 * @param props.imageSize Size of the image
 * @param props.imageBorderRadius Border radius for images
 * @param props.iconNoPadding Whether to remove padding from icons
 */
export default function FancyItemContent(props: TFancyItemContentWithHTMLProps) {
  const {
    item,
    layoutMode = 'normal',
    gapBetweenIcon,
    gapBetweenText = '0',
    imageSize = 'lg',
    imageBorderRadius = 'xs',
    iconNoPadding,
    ...htmlProps
  } = props;

  return (
    <div {...htmlProps}>
      <FancyContent layoutMode={layoutMode} gapBetweenIcon={gapBetweenIcon} gapBetweenText={gapBetweenText}>
        {/* Render image or icon if provided */}
        {(item.image || item.icon) &&
          (item.image ? (
            <FancyContent.Image sizeH={imageSize} borderRadius={imageBorderRadius}>
              <img src={item.image} alt={item.title} />
            </FancyContent.Image>
          ) : (
            <FancyContent.Icon sizeC="lg">{item.icon}</FancyContent.Icon>
          ))}

        {/* Title */}
        <FancyContent.Title fontVariant="subTextCaption">{item.title}</FancyContent.Title>

        {/* Description if provided */}
        {item.description && (
          <FancyContent.Description fontVariant="subTextFootnote" themeType="secondary" layer={5}>
            {item.description}
          </FancyContent.Description>
        )}
      </FancyContent>
    </div>
  );
}

import { Chip } from '@/components/molecules/Chip';
import { FancyProfilePicture } from '@/components/atoms/FancyProfilePicture';

import { sizeSettings } from './sizeSettings';
import { generateChipStyle } from './FancyMiniProfile.style';
import { TFancyMiniprofileWithHTMLProps } from './TFancyMiniProfile.model';

// --------------------------------------------------------------------------- //
// ------ The MiniProfile rendes a image with a heading and description ------ //
// --------------------------------------------------------------------------- //
export default function FancyMiniProfile(props: TFancyMiniprofileWithHTMLProps) {
  const { sizeC = 'sm', Image, title, subTitle, themeType, layer = 3, alignImage = 'right', ...htmlProps } = props;

  // Define a function to calculate the spacing position for the chip
  const chipStyle = generateChipStyle({ sizeC, themeType, layer, $alignImage: alignImage });

  return (
    <Chip sizeC={sizeC} themeType={themeType} layer={layer} externalStyle={chipStyle} {...htmlProps}>
      <FancyProfilePicture className="miniprofile_content-image" sizeC="complete">
        {Image}
      </FancyProfilePicture>
      <Chip.Content className="miniprofile_content" alignIcon={alignImage} gapBetweenText="0">
        {title && (
          <Chip.Content.Title lineHeight={1.2} fontVariant={sizeSettings[sizeC].titleSize}>
            {title}
          </Chip.Content.Title>
        )}
        {subTitle && (
          <Chip.Content.Description lineHeight={1.1} fontVariant={sizeSettings[sizeC].subtitleSize}>
            {subTitle}
          </Chip.Content.Description>
        )}
      </Chip.Content>
    </Chip>
  );
}

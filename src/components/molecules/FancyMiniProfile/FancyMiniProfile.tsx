import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

import { TComponentSizes } from '@/interface/TComponentSizes';
import { FancyProfilePicture } from '@/components/atoms/FancyProfilePicture';
import { sizeSettings } from '@/components/molecules/FancyMiniProfile/sizeSettings';
import { Chip } from '@/components/molecules/Chip';
import { generateChipStyle } from '@/components/molecules/FancyMiniProfile/FancyMiniProfile.style';

type TFancyMiniprofile = {
  title?: string;
  subTitle?: string;
  src?: string;
  size?: TComponentSizes;
  themeType?: TThemeTypes;
  layer?: TLayer;
  shadow?: boolean;
  alignImage?: 'left' | 'right';
} & React.HTMLAttributes<HTMLDivElement>;
// --------------------------------------------------------------------------- //
// ------ The MiniProfile rendes a image with a heading and description ------ //
// --------------------------------------------------------------------------- //
export default function FancyMiniProfile(props: TFancyMiniprofile) {
  const { size = 'sm', src, title, subTitle, themeType, layer = 3, alignImage = 'right', ...htmlProps } = props;

  // Define a function to calculate the spacing position for the chip
  const chipStyle = generateChipStyle({ size, themeType, layer, $alignImage: alignImage });

  return (
    <Chip size={size} themeType={themeType} layer={layer} externalStyle={chipStyle} {...htmlProps}>
      <FancyProfilePicture className="miniprofile_content-image" size="complete" src={src || ''}></FancyProfilePicture>
      <Chip.Content className="miniprofile_content" alignIcon={alignImage} gapBetweenText="0">
        {title && <Chip.Content.Title fontVariant={sizeSettings[size].titleSize}> {title}</Chip.Content.Title>}
        {subTitle && (
          <Chip.Content.Description fontVariant={sizeSettings[size].subtitleSize}>{subTitle}</Chip.Content.Description>
        )}
      </Chip.Content>
    </Chip>
  );
}

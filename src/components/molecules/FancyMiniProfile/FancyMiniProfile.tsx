import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

import { TComponentSizes } from '@/interface/TComponentSizes';
import { StyledChip } from './FancyMiniProfile.style';
import { FancyProfilePicture } from '@/components/atoms/FancyProfilePicture';
import { sizeSettings } from '@/components/molecules/FancyMiniProfile/sizeSettings';

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

  return (
    <StyledChip size={size} themeType={themeType} layer={layer} $alignedImage={alignImage} {...htmlProps}>
      <FancyProfilePicture className="miniprofile_content-image" size="complete" src={src || ''}></FancyProfilePicture>
      <StyledChip.Content className="miniprofile_content" alignIcon={alignImage} gapBetweenText="0">
        {title && (
          <StyledChip.Content.Title fontVariant={sizeSettings[size].titleSize}> {title}</StyledChip.Content.Title>
        )}
        {subTitle && (
          <StyledChip.Content.Description fontVariant={sizeSettings[size].subtitleSize}>
            {subTitle}
          </StyledChip.Content.Description>
        )}
      </StyledChip.Content>
    </StyledChip>
  );
}

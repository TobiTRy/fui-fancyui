
import { FancyImage } from '@/components/atoms/FancyImage';
import { FancyContent } from '@/components/molecules/FancyContent';
import MiniProfileImage from '@/components/molecules/MiniProfile/components/MiniProfileImage/MiniProfileImage';
import { Chip } from '@/components/molecules/Chip';
import { css } from 'styled-components';
import { TChipProps } from '@/components/molecules/Chip/Chip';

type IMiniProfile = {
  children?: React.ReactNode;
} & TChipProps;
export default function MiniProfile(props: IMiniProfile) {
  const { children } = props;

  return (
    <Chip
      layer={3}
      externalStyle={css`
        gap: 4px;
      `}
    >
      {children}
      {/* <FancyImage
        className="profile_picture"
        src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
      />

      <FancyContent gapBetweenText={'0'} className="profile_content">
        <FancyContent.Title fontVariant="content" className="profile_title">
          Tobiii
        </FancyContent.Title>
        <FancyContent.Description fontVariant="verysmText" className="profile_description">
          @Tobii
        </FancyContent.Description>
      </FancyContent> */}
    </Chip>
  );
}

MiniProfile.Image = MiniProfileImage;
MiniProfile.Avatar = FancyImage;
MiniProfile.Content = FancyContent;

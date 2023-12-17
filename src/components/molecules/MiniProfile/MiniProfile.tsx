import { StyledMiniProfile } from '@/components/molecules/MiniProfile/MiniProfile.style';
import { FancyImage } from '@/components/atoms/FancyImage';
import { FancyContent } from '@/components/molecules/FancyContent';

export default function MiniProfile() {
  return (
    <StyledMiniProfile layer={3}>
      <FancyImage
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
      </FancyContent>
    </StyledMiniProfile>
  );
}

MiniProfile.Image = FancyImage;

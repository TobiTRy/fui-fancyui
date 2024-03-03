import { StyledImage } from './FancyProfilePicture.style';
import { TextAvatar } from '@/components/molecules/TextAvatar';
import { IFancyProfilePicture } from '@/components/atoms/FancyProfilePicture/TFancyProfilePicture.model';

// --------------------------------------------------------------------------- //
//  ProfilePicture component to render with  different sizes and border radius //
// --------------------------------------------------------------------------- //
export default function FancyProfilePicture(props: IFancyProfilePicture) {
  const { rounded = 'complete', sizeC = 'md', alt, externalStyle, textAvatarSettings, ...htmlProps } = props;

  return 'src' in htmlProps ? (
    <StyledImage $rounded={rounded} $sizeC={sizeC} $externalStyle={externalStyle} alt={alt} {...htmlProps} />
  ) : (
    <TextAvatar {...textAvatarSettings} rounded={rounded} sizeC={sizeC} text={alt} externalStyle={externalStyle} />
  );
}

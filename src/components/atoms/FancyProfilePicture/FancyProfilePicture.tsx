import { StyledImage } from './FancyProfilePicture.style';
import { TextAvatar } from '@/components/molecules/TextAvatar';
import { TFancyProfilePictureWithHTMLAttrs } from './TFancyProfilePicture.model';

// --------------------------------------------------------------------------- //
//  ProfilePicture component to render with  different sizes and border radius //
// --------------------------------------------------------------------------- //
export default function FancyProfilePicture(props: TFancyProfilePictureWithHTMLAttrs) {
  const { borderRadius = 'complete', sizeC = 'md', alt, externalStyle, textAvatarSettings, ...htmlProps } = props;

  return 'src' in htmlProps ? (
    <StyledImage $rounded={borderRadius} $sizeC={sizeC} $externalStyle={externalStyle} alt={alt} {...htmlProps} />
  ) : (
    <TextAvatar
      {...textAvatarSettings}
      borderRadius={borderRadius}
      sizeC={sizeC}
      text={alt}
      externalStyle={externalStyle}
    />
  );
}

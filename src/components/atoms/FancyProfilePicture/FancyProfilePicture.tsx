import { CSSProp } from 'styled-components';

import { StyledImage } from './FancyProfilePicture.style';
import { TextAvatar } from '@/components/molecules/TextAvatar';
import { TSize } from '@/components/molecules/TextAvatar/utils/getSize';

type TtextAvatarSettings = React.ComponentProps<typeof TextAvatar>;

export type IFancyProfilePicture = {
  rounded?: 'sm' | 'md' | 'lg' | 'complete';
  sizeC?: TSize | string;
  externalStyle?: CSSProp;
  textAvatarSettings?: Omit<TtextAvatarSettings, 'text'>;
} & React.ImgHTMLAttributes<HTMLImageElement>;
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

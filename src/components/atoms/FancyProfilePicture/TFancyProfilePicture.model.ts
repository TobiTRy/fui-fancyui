import { CSSProp } from 'styled-components';

import { TextAvatar } from '@/components/molecules/TextAvatar';
import { TglobalElementSizes } from '@/design/theme/globalSizes';

type TtextAvatarSettings = React.ComponentProps<typeof TextAvatar>;

export type TFancyProfilePicture = {
  borderRadius?: 'sm' | 'md' | 'lg' | 'complete' | 'none';
  sizeC?: TglobalElementSizes | string;
  externalStyle?: CSSProp;
  textAvatarSettings?: Omit<TtextAvatarSettings, 'text'>;
  nickname?: string;
};

export type TFancyProfilePictureWithHTMLAttrs = TFancyProfilePicture &
  React.HtmlHTMLAttributes<HTMLElement> & { children?: React.ReactNode };

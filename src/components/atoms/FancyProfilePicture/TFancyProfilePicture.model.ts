import { CSSProp } from 'styled-components';

import { TextAvatar } from '@/components/molecules/TextAvatar';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';

type TtextAvatarSettings = React.ComponentProps<typeof TextAvatar>;

export type TFancyProfilePicture = {
  borderRadius?: 'sm' | 'md' | 'lg' | 'complete' | 'none';
  sizeC?: TglobalElementSizes | 'fit' | (string & {});
  externalStyle?: CSSProp;
  textAvatarSettings?: Omit<TtextAvatarSettings, 'text'>;
  nickname?: string;
};

export type TFancyProfilePictureWithHTMLAttrs = TFancyProfilePicture &
  React.HtmlHTMLAttributes<HTMLElement> & { children?: React.ReactNode };

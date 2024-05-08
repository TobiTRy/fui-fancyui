import { ReactElement } from 'react';
import { CSSProp } from 'styled-components';

import { TextAvatar } from '@/components/molecules/TextAvatar';
import { TSize } from '@/components/molecules/TextAvatar/utils/getSize';

type TtextAvatarSettings = React.ComponentProps<typeof TextAvatar>;

export type TFancyProfilePicture = {
  borderRadius?: 'sm' | 'md' | 'lg' | 'complete' | 'none';
  sizeC?: TSize | string;
  externalStyle?: CSSProp;
  textAvatarSettings?: Omit<TtextAvatarSettings, 'text'>;
  nickname?: string;
};

export type TFancyProfilePictureWithHTMLAttrs = TFancyProfilePicture &
  React.HtmlHTMLAttributes<HTMLElement> & { children?: React.ReactNode };

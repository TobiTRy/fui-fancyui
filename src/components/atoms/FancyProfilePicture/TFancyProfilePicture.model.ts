import { CSSProp } from 'styled-components';

import { TextAvatar } from '@/components/molecules/TextAvatar';
import { TglobalElementSizes } from '@/types/TGlobalElementSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer } from '@/types';

type TtextAvatarSettings = React.ComponentProps<typeof TextAvatar>;

export type TFancyProfilePicture = {
  borderRadius?: 'sm' | 'md' | 'lg' | 'complete' | 'none';
  sizeC?: TglobalElementSizes | 'fit' | (string & {});
  externalStyle?: CSSProp;
  textAvatarSettings?: Omit<TtextAvatarSettings, 'text'>;
  nickname?: string;
  themeType?: TUiColorsMain;
  layer?: TLayer;
};

export type TFancyProfilePictureWithHTMLAttrs = TFancyProfilePicture &
  React.HtmlHTMLAttributes<HTMLElement> & { children?: React.ReactNode };

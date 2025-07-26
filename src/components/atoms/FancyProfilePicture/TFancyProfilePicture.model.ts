import { CSSProp } from 'styled-components';

import { TextAvatar } from '@/components/molecules/TextAvatar';
import { TBorderRadiusSizes, TComponentSizesExtended, TLayer } from '@/types';
import { TUiColorsMain } from '@/types/TUiColorsMain';

type TtextAvatarSettings = React.ComponentProps<typeof TextAvatar>;

export type TFancyProfilePicture = {
  borderRadius?: TBorderRadiusSizes | 'none';
  sizeC?: TComponentSizesExtended | 'fit' | (string & {});
  externalStyle?: CSSProp;
  textAvatarSettings?: Omit<TtextAvatarSettings, 'text'>;
  nickname?: string;
  themeType?: TUiColorsMain;
  layer?: TLayer;
};

export type TFancyProfilePictureWithHTMLAttrs = TFancyProfilePicture &
  React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };

import React from 'react';

import { Typography } from '@/components/atoms/Typography';
import { Placeholder } from '@/components/molecules/TextAvatar/TextAvatar.style';

import { getTextSize } from '@/components/atoms/FancyProfilePicture/utils/getTextSize';
import { TTextAvatarProps } from '@/components/molecules/TextAvatar/TextAvatar.model';

type TAvatarTextImage = TTextAvatarProps & React.HTMLAttributes<HTMLDivElement>;
export default function TextAvatar(props: TAvatarTextImage) {
  const {
    rounded,
    sizeC = 'md',
    color,
    backgroundColor,
    themeType,
    layer,
    fontSizes,
    externalStyle,
    text,
    letterLength,
    ...htmlProps
  } = props;

  return (
    <Placeholder
      tabIndex={htmlProps.tabIndex ?? 0}
      $rounded={rounded}
      $sizeC={sizeC}
      $color={color}
      $backgroundColor={backgroundColor}
      $externalStyle={externalStyle}
      $themeType={themeType}
      $layer={layer}
      {...htmlProps}
    >
      <Typography elType="span" variant={fontSizes || getTextSize(sizeC)}>
        {text?.substring(0, letterLength ?? 2).toUpperCase()}
      </Typography>
    </Placeholder>
  );
}

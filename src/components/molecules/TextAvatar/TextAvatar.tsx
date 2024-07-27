'use client';

import { Typography } from '@/components/atoms/Typography';
import { Placeholder } from '@/components/molecules/TextAvatar/TextAvatar.style';

import { getTextSize } from '@/components/atoms/FancyProfilePicture/utils/getTextSize';
import { TTTextAvatarWithHTMLAttrs } from './TextAvatar.model';
import { generateText } from './utils/generateText';

// --------------------------------------------------------------------------- //
// ------- The Text Avatar renders a Avatar with background and initials ----- //
// --------------------------------------------------------------------------- //
export default function TextAvatar(props: TTTextAvatarWithHTMLAttrs) {
  const {
    borderRadius,
    sizeC = 'md',
    color,
    backgroundColor,
    themeType = 'primary',
    layer = 2,
    fontSizes,
    externalStyle,
    text,
    letterLength,
    casing,
    ...htmlProps
  } = props;

  return (
    <Placeholder
      tabIndex={htmlProps.tabIndex ?? 0}
      $borderRadius={borderRadius}
      $sizeC={sizeC}
      $color={color}
      $backgroundColor={backgroundColor}
      $externalStyle={externalStyle}
      $themeType={themeType}
      $layer={layer}
      {...htmlProps}
    >
      <Typography elType="span" variant={fontSizes || getTextSize(sizeC)}>
        {text ? generateText(text, letterLength ?? 2, casing) : ''}
      </Typography>
    </Placeholder>
  );
}

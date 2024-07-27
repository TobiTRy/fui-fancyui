'use client';

import { StyledSystemMessageWrapper } from '@/components/atoms/SystemMessage/SystemMessage.style';
import { Typography } from '@/components/atoms/Typography';

import { TSystemMessageWithHTMLAttrs } from '@/components/atoms/SystemMessage/TSystemMassage.model';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

// --------------------------------------------------------------------------- //
// ------- Only a SystemMessage(Text) that renders in different colors ------- //
// --------------------------------------------------------------------------- //
export default function SystemMessage(props: TSystemMessageWithHTMLAttrs & { textSettings?: TTypography }) {
  const {
    themeType,
    layer,
    systemMessageState,
    children,
    textSettings,
    ownTypographyComponent,
    externalStyle,
    ...htmlProps
  } = props;

  return (
    <StyledSystemMessageWrapper
      $themeType={themeType}
      $layer={layer}
      $systemMessageState={systemMessageState}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {!ownTypographyComponent && (
        <Typography variant="subTextFootnote" tabIndex={-1} lineHeight={1} {...textSettings}>
          {children}
        </Typography>
      )}
      {ownTypographyComponent && children}
    </StyledSystemMessageWrapper>
  );
}

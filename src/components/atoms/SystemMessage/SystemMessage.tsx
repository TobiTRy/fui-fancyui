'use client';

import { StyledSystemMessageWrapper } from '@/components/atoms/SystemMessage/SystemMessage.style';
import { Typography, TTypography } from '@/components/atoms/Typography';

import { TSystemMessageWithHTMLAttrs } from '@/components/atoms/SystemMessage/TSystemMassage.model';

// --------------------------------------------------------------------------- //
// ------- Only a SystemMessage(Text) that renders in different colors ------- //
// --------------------------------------------------------------------------- //
export default function SystemMessage(props: TSystemMessageWithHTMLAttrs & { textSettings?: TTypography }) {
  const {
    themeType = 'error',
    layer,
    systemMessageType,
    children,
    textSettings,
    externalStyle,
    showMessage = true,
    ...htmlProps
  } = props;

  return (
    <StyledSystemMessageWrapper
      $themeType={themeType}
      $layer={layer}
      $systemMessageType={systemMessageType}
      $externalStyle={externalStyle}
      $fontVariant={textSettings?.variant ?? 'subTextFootnote'}
      role="alert"
      {...htmlProps}
    >
      {!!showMessage && (
        <Typography variant="subTextFootnote" tabIndex={-1} lineHeight={1} {...textSettings}>
          {children}
        </Typography>
      )}
    </StyledSystemMessageWrapper>
  );
}

import { StyledSystemMessageWrapper } from '@/components/atoms/SystemMessage/SystemMessage.style';
import { Typography } from '@/components/atoms/Typography';

import { TSystemMessage } from '@/components/atoms/SystemMessage/TSystemMassage.model';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

// --------------------------------------------------------------------------- //
// ------- Only a SystemMessage(Text) that renders in different colors ------- //
// --------------------------------------------------------------------------- //
export default function SystemMessage(props: TSystemMessage & { textSettings?: TTypography }) {
  const { themeType, layer, systemMessageState, children, textSettings, ownTypographyComponent, externalStyle } = props;

  return (
    <StyledSystemMessageWrapper
      $themeType={themeType}
      $layer={layer}
      $systemMessageState={systemMessageState}
      $externalStyle={externalStyle}
    >
      {!ownTypographyComponent && (
        <Typography variant="subTextFootnote" lineHeight={1} {...textSettings}>
          {children}
        </Typography>
      )}
      {ownTypographyComponent && children}
    </StyledSystemMessageWrapper>
  );
}

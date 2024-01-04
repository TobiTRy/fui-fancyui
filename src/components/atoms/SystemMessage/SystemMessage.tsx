import { StyledSystemMessageWrapper } from '@/components/atoms/SystemMessage/SystemMessage.style';
import { Typography } from '@/components/atoms/Typography';

import { TSystemMessage } from '@/components/atoms/SystemMessage/TSystemMassage.model';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

// --------------------------------------------------------------------------- //
// ------- Only a SystemMessage(Text) that renders in different colors ------- //
// --------------------------------------------------------------------------- //
export default function SystemMessage(props: TSystemMessage & { textSettings?: TTypography }) {
  const { systemMessageState, children, textSettings } = props;

  return (
    <StyledSystemMessageWrapper $systemMessageState={systemMessageState}>
      <Typography type={'verysmText'} {...textSettings}>
        {children}
      </Typography>
    </StyledSystemMessageWrapper>
  );
}

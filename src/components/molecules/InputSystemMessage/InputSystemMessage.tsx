import { TInputSystemMessage } from '@/components/molecules/InputSystemMessage/InputSystemMessage.model';
import { ExtendedSystemMessage, Wrapper } from './InputSystemMessage.style';

export default function InputSystemMessage(props: TInputSystemMessage) {
  const { themeType = 'error', layer = 0, children, showMessage } = props;

  return (
    <Wrapper>
      {showMessage && (
        <ExtendedSystemMessage
          themeType={themeType ?? 'error'}
          layer={layer}
          role="alert"
          textSettings={{
            variant: 'subTextFootnote',
          }}
        >
          {children}
        </ExtendedSystemMessage>
      )}
    </Wrapper>
  );
}

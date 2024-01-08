import { InputUnderline } from '@/components/atoms/InputUnderline';
import { TLabeledInput } from '@/components/molecules/LabeledInput/TLabledInput.model';
import { clampLayer } from '@/utils/functions/clampLayer';

import { InputLabel, InputWrapper, Wrapper } from './LabeledInput.style';

export default function LabeledInput(props: TLabeledInput) {
  const {
    id,
    inputElement,
    systemMessageType,
    label,
    value,
    placeholder,
    themeType,
    layer = 4,
    underline,
    isActive,
    align,
  } = props;

  // Check if the label should move up
  const labelShouldMoveUp = !!((value === 0 ? undefined : value) || value === 0) || !!placeholder;

  return (
    <Wrapper $themeType={themeType} $layer={layer}>
      {/* The Labled thats animated and adjusts the padding with the type of the Input */}
      <InputLabel $align={align} id={id} $isActive={labelShouldMoveUp} $systemMessageType={systemMessageType}>
        {label}
      </InputLabel>
      {/* The wrapper for the input field to style and align the input*/}
      <InputWrapper $isActive={labelShouldMoveUp} $isLabelProvided={!!label}>
        {inputElement}
      </InputWrapper>
      {underline && (
        <InputUnderline
          systemMessageType={systemMessageType}
          themeType={themeType}
          layer={clampLayer(layer + 2)}
          isActive={isActive}
          externalStyle={{ bottom: '-2px' }}
        />
      )}
    </Wrapper>
  );
}

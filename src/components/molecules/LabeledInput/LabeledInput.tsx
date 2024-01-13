import { InputUnderline } from '@/components/atoms/InputUnderline';
import { TLabeledInput } from '@/components/molecules/LabeledInput/TLabledInput.model';
import { clampLayer } from '@/utils/functions/clampLayer';

import { InputWrapper, Wrapper } from './LabeledInput.style';
import { InputLabel } from '@/components/atoms/InputLabel';

export default function LabeledInput(props: TLabeledInput) {
  const {
    id,
    inputElement,
    systemMessageType,
    label,
    hasValue,
    placeholder,
    themeType,
    layer = 3,
    underline,
    labelVariant,
    isActive,
    align,
  } = props;

  // Check if the label should move up
  const labelShouldMoveUp = hasValue || !!placeholder;

  return (
    <Wrapper>
      {/* The Labled thats animated and adjusts the padding with the type of the Input */}
      {label && (
        <InputLabel
          $lableVariant={labelVariant}
          $align={align}
          id={id}
          $isActive={labelShouldMoveUp}
          $systemMessageType={systemMessageType}
        >
          {label}
        </InputLabel>
      )}
      {/* The wrapper for the input field to style and align the input*/}
      <InputWrapper $isActive={labelVariant !== 'static' && labelShouldMoveUp} $isLabelProvided={!!label}>
        {inputElement}
      </InputWrapper>
      {underline && (
        <InputUnderline
          systemMessageType={systemMessageType}
          themeType={themeType}
          layer={layer ? clampLayer(layer + 2) : 3}
          isActive={isActive}
          externalStyle={{ bottom: '-2px' }}
        />
      )}
    </Wrapper>
  );
}

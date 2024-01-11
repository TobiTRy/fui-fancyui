import { useId } from 'react';
import { styled } from 'styled-components';

import { RawSlider } from '@/components/atoms/RawSlider';
import { NewInputLabel } from '@/components/atoms/InputLabelNew/InputLabelNew';
import { TLabeledRangeSliderWithNativeAttrs } from '@/components/molecules/LabeledRangeSlider/TLabeledRangeSlider.model';
import { TInputLabel } from '@/components/atoms/InputLabelNew/TInputLabel';

export default function LabeledRangeSlider(
  props: TLabeledRangeSliderWithNativeAttrs & Omit<TInputLabel, 'lableVariant'>
) {
  const { id, label, systemMessageType, ...sliderProps } = props;

  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <Wrapper>
      {label && (
        <NewInputLabel htmlFor={usedId} $systemMessageType={systemMessageType} $lableVariant="static">
          {label}
        </NewInputLabel>
      )}
      <div className="wrapper_rawslider-input">
        <RawSlider id={usedId} {...sliderProps} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;
`;

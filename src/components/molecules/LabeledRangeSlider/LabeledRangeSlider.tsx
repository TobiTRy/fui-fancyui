import { useId } from 'react';
import { styled } from 'styled-components';

import { RawSlider } from '@/components/atoms/RawSlider';
import { NewInputLabel } from '@/components/atoms/InputLabelNew/InputLabelNew';
import { TLabeledRangeSliderWithNativeAttrs } from '@/components/molecules/LabeledRangeSlider/TLabeledRangeSlider.model';
import { TInputLabel } from '@/components/atoms/InputLabelNew/TInputLabel';

type TLabeledRangeSlider = TLabeledRangeSliderWithNativeAttrs & Omit<TInputLabel, 'lableVariant'>;
export default function LabeledRangeSlider(props: TLabeledRangeSlider) {
  const { id, label, systemMessageType, isActive, ...sliderProps } = props;

  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <Wrapper>
      {label && (
        <NewInputLabel
          htmlFor={usedId}
          $isActive={isActive}
          $systemMessageType={systemMessageType}
          $lableVariant="static"
        >
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
`;

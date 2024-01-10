import { useId } from 'react';

import { RawSlider } from '@/components/atoms/RawSlider';

import { NewInputLabel } from '@/components/atoms/InputLabelNew/InputLabelNew';
import { TRawSliderWithNativeAttrs } from '@/components/atoms/RawSlider/TRawSlider.model';
import { styled } from 'styled-components';

export default function LabeledRangeSlider(props: TRawSliderWithNativeAttrs) {
  const { id, ...sliderProps } = props;

  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <Wrapper>
      <NewInputLabel htmlFor={usedId} $lableVariant="static">
        Slider
      </NewInputLabel>
      <RawSlider id={usedId} {...sliderProps} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

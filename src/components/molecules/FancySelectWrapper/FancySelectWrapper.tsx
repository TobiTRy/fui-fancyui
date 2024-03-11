import { useId } from 'react';

import { FancyContent } from '@/components/molecules/FancyContent';
import { IFancySelectWrapper } from './FancySelectWrapper.model';
import { InputWrapper, LabelWrapper, Wrapper } from './FancySelectWrapper.style';

// --------------------------------------------------------------------------- //
// - A simple Checkbox/Radio Wrapper  that provides a label and description -- //
// --------------------------------------------------------------------------- //
export default function FancySelectWrapper(props: IFancySelectWrapper) {
  const { label, align = 'center', alignInput = 'left', description, inputElement, externalStyle } = props;

  const id = useId();
  const pickedId = props.id ? props.id : id;

  return (
    <Wrapper $align={align} $externalStyle={externalStyle}>
      {/* The label and description */}
      {(label || description) && (
        <LabelWrapper $align={alignInput} htmlFor={pickedId}>
          <FancyContent>
            {label && (
              <FancyContent.Title fontVariant="interactiveLg" themeType="secondary" layer={0} fontWeight={'bold'}>
                {label}
              </FancyContent.Title>
            )}
            {description && (
              <FancyContent.Description
                className="description"
                fontVariant="bodytextSm"
                themeType="secondary"
                layer={2}
              >
                {description}
              </FancyContent.Description>
            )}
          </FancyContent>
        </LabelWrapper>
      )}
      {/* The check box */}
      <InputWrapper>{inputElement}</InputWrapper>
    </Wrapper>
  );
}

'use client';

import { useId } from 'react';

import { FancyContent } from '@/components/molecules/FancyContent';
import { TFancySelectWrapperWithHTMLProps } from './TFancySelectWrapper.model';
import { InputWrapper, LabelWrapper } from './FancySelectWrapper.style';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';

// --------------------------------------------------------------------------- //
// - A simple Checkbox/Radio Wrapper  that provides a label and description -- //
// --------------------------------------------------------------------------- //
export default function FancySelectWrapper(props: TFancySelectWrapperWithHTMLProps) {
  const {
    label,
    align = 'center',
    alignInput = 'left',
    description,
    inputElement,
    externalStyle,
    themeType = 'secondary',
    layerDescription = 2,
    layer = 0,
    ...htmlProps
  } = props;

  const id = useId();
  const pickedId = props.id ? props.id : id;

  return (
    <>
      {/* The label and description */}
      {(label || description) && (
        <LabelWrapper $align={align} htmlFor={pickedId} $externalStyle={externalStyle} {...htmlProps}>
          <FancyContent align={leftRightCenterToFlexJustify[alignInput]}>
            {label && (
              <FancyContent.Title fontVariant="interactiveLg" themeType={themeType} layer={layer} fontWeight={'bold'}>
                {label}
              </FancyContent.Title>
            )}
            {description && (
              <FancyContent.Description
                className="description"
                fontVariant="bodytextSm"
                themeType={themeType}
                layer={layerDescription}
              >
                {description}
              </FancyContent.Description>
            )}
          </FancyContent>
          {/* The check box */}
          <InputWrapper $alignInput={alignInput}>{inputElement}</InputWrapper>
        </LabelWrapper>
      )}
    </>
  );
}

'use client';

import { useId } from 'react';

import { FancyContent } from '@/components/molecules/FancyContent';
import { TFancySelectWrapperWithHTMLProps } from './TFancySelectWrapper.model';
import { InputWrapper, LabelWrapper } from './FancySelectWrapper.style';

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
    gap = 'xs',
    id: idProp,
    disabled,
    ...htmlProps
  } = props;

  const id = useId();
  const pickedId = idProp ? idProp : id;

  return (
    <>
      {/* The label and description */}
      {label || description ? (
        <LabelWrapper
          $align={align}
          $disabled={disabled}
          htmlFor={pickedId}
          $externalStyle={externalStyle}
          $gap={gap}
          {...htmlProps}
        >
          <FancyContent layoutMode="normal">
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
      ) : (
        /* Render just the input element when no label/description */
        <div>{inputElement}</div>
      )}
    </>
  );
}

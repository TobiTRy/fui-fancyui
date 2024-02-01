import React, { useId } from 'react';
import { CSSProp } from 'styled-components';

import { themeStore } from '@/design/theme/themeStore';
import { InputWrapper, LabelWrapper, Wrapper } from './FancySelectWrapper.style';
import { TAlign, TAlignCheckbox } from '@/components/molecules/FancyCheckbox/FancyCheckbox.model';
import { FancyContent } from '@/components/molecules/FancyContent';

export interface IFancySelectWrapperProps {
  label?: string;
  align?: TAlign;
  alignInput?: TAlignCheckbox;
  description?: string;
  id?: string;
  inputElement?: React.ReactNode;
  externalStyle?: CSSProp;
}
// --------------------------------------------------------------------------- //
// - A simple Checkbox/Radio Wrapper  that provides a label and description -- //
// --------------------------------------------------------------------------- //
export default function FancySelectWrapper(props: IFancySelectWrapperProps) {
  const { label, align, alignInput, description, inputElement, externalStyle } = { ...defaultProps, ...props };
  const getTheme = themeStore((state) => state.theme);

  const id = useId();
  const pickedId = props.id ? props.id : id;

  return (
    <Wrapper $align={align} $externalStyle={externalStyle}>
      {/* The label and description */}
      {(label || description) && (
        <LabelWrapper $align={alignInput} htmlFor={pickedId}>
          <FancyContent>
            {label && (
              <FancyContent.Title
                fontVariant="interactiveLg"
                externalStyle={{ color: getTheme.colors.secondary[0], fontWeight: 'bold' }}
              >
                {label}
              </FancyContent.Title>
            )}
            {description && (
              <FancyContent.Description
                className="description"
                fontVariant="bodytextSm"
                externalStyle={{ color: getTheme.colors.secondary[2] }}
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

// the default props of the component
const defaultProps: IFancySelectWrapperProps = {
  align: 'center',
  alignInput: 'left',
};

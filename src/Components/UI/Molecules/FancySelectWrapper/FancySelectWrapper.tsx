import React, { useId } from 'react';
import { CSSProp } from 'styled-components';

import themeStore from '../../../Design/color/themeStore/themeStore';
import { TAlign, TAlignCheckbox } from '../FancyCheckbox/FancyCheckbox.model';
import { LabelWrapper, Wrapper } from './FancySelectWrapper.style';
import FancyContent from '../FancyContent/FancyContent';

// --------------------------------------------------------------------------- //
// -------------------- A simple Checkbox with a Label ----------------------- //
// --------------------------------------------------------------------------- //
export interface IFancySelectWrapperProps {
  label?: string;
  align?: TAlign;
  alignInput?: TAlignCheckbox;
  description?: string;
  id?: string;
  inputElement?: React.ReactNode;
  externalStyle?: CSSProp;
}
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
              <FancyContent.Title fontVariant="label" externalStyle={{ color: getTheme.colors.secondary[0], fontWeight: 'bold' }}>
                {label}
              </FancyContent.Title>
            )}
            {description && (
              <FancyContent.Description
                className="description"
                fontVariant="smText"
                externalStyle={{ color: getTheme.colors.secondary[2] }}
              >
                {description}
              </FancyContent.Description>
            )}
          </FancyContent>
        </LabelWrapper>
      )}
      {/* The check box */}
      {inputElement}
    </Wrapper>
  );
}

// the default props of the component
const defaultProps: IFancySelectWrapperProps = {
  align: 'center',
  alignInput: 'left',
};

import React from 'react';
import { CSSProp, css, styled } from 'styled-components';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { spacingPx } from '../../Design/design';

const generateFlexSytles = (props: TStyledFlexBoxProps) => {
  const { $flexDirection, $flexJustify, $flexAlign, $gap } = props;

  return css`
    display: flex;
    flex-direction: ${$flexDirection ?? 'column'};
    justify-content: ${ $flexJustify ?? 'center'};
    align-items: ${$flexAlign ?? 'flex-start'};
    gap: ${$gap?? spacingPx.xxs};
  `;
};

type TStyledFlexBoxProps = IStyledPrefixAndPicker<TStyleProps>;
const StyledFlexBox = styled.div<TStyledFlexBoxProps>`
  ${(props:TStyledFlexBoxProps) => generateFlexSytles({...props}) }
`;


const StyledInlineFlexBox = styled.span<TStyledFlexBoxProps>`
  ${(props:TStyledFlexBoxProps) => generateFlexSytles({...props}) }
`;

type TStyleProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gap?: string;
}

interface FancyFlexBoxProps {
  children?: React.ReactNode;
  inline?: boolean;
}

export default function FancyFlexBox(props: FancyFlexBoxProps) {
  const { children, inline } = props;
  const Container = inline ? StyledInlineFlexBox : StyledFlexBox;

  return <Container>{children}</Container>;
}

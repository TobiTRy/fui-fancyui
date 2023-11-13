import  { styled, css } from "styled-components";
import { spacingPx } from "../../Design/design";
import { TStyleProps } from "./FancyFlexBox.model";
import IStyledPrefixAndPicker from "../../Interface/IStyledPrefixAndPicker.model";

const generateFlexSytles = (props: TStyledFlexBoxProps) => {
  const { $flexDirection, $flexJustify, $flexAlign, $gap } = props;

  return css`
    display: flex;
    width: 100%;
    flex-direction: ${$flexDirection ?? 'row'};
    justify-content: ${ $flexJustify ?? 'flex-start'};
    align-items: ${$flexAlign ?? 'flex-start'};
    gap: ${$gap?? spacingPx.xxs};
  `;
};

type TStyledFlexBoxProps = IStyledPrefixAndPicker<TStyleProps>;
export const StyledFlexBox = styled.div<TStyledFlexBoxProps>`
  ${(props:TStyledFlexBoxProps) => generateFlexSytles({...props}) }
`;


export const StyledInlineFlexBox = styled.span<TStyledFlexBoxProps>`
  ${(props:TStyledFlexBoxProps) => generateFlexSytles({...props}) }
`;

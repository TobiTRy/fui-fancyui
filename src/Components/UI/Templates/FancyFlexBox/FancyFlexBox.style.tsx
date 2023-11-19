import  { styled, css } from "styled-components";
import { TStyleProps } from "./FancyFlexBox.model";
import IStyledPrefixAndPicker from "../../Interface/IStyledPrefixAndPicker.model";
import { TTheme } from '@/Components/UI/Interface/TTheme';

const generateFlexSytles = (props: TStyledFlexBoxProps & {theme?: TTheme}) => {
  const { $flexDirection, $flexJustify, $flexAlign, $gap, theme } = props;

  return css`
    display: flex;
    width: 100%;
    flex-direction: ${$flexDirection ?? 'row'};
    justify-content: ${ $flexJustify ?? 'flex-start'};
    align-items: ${$flexAlign ?? 'flex-start'};
    gap: ${$gap ?? theme!.spacing.xxs};
  `;
};

type TStyledFlexBoxProps = IStyledPrefixAndPicker<TStyleProps>;
export const StyledFlexBox = styled.div<TStyledFlexBoxProps>`
  ${(props:TStyledFlexBoxProps) => generateFlexSytles({...props}) }
`;


export const StyledInlineFlexBox = styled.span<TStyledFlexBoxProps>`
  ${(props:TStyledFlexBoxProps) => generateFlexSytles({...props}) }
`;

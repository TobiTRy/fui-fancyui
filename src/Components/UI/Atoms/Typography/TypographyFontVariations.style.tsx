import { ReactNode } from "react";
import styled, { CSSProp } from "styled-components";

export interface IStyledComponentProps {
  children?: ReactNode;
  $variant?: CSSProp;
  $style?: CSSProp;
}
// Base styled component for common styles
const BaseStyledComponent = styled.span<IStyledComponentProps>`
  ${(props) => props.$variant};
  ${(props) => props.$style};
`;

// Styled components for each type of typography
const StyledH1 = styled(BaseStyledComponent).attrs({ as: 'h1' })``;
const StyledH2 = styled(BaseStyledComponent).attrs({ as: 'h2' })``;
const StyledH3 = styled(BaseStyledComponent).attrs({ as: 'h3' })``;
const StyledH4 = styled(BaseStyledComponent).attrs({ as: 'h4' })``;
const StyledH5 = styled(BaseStyledComponent).attrs({ as: 'h5' })``;
const StyledH6 = styled(BaseStyledComponent).attrs({ as: 'h6' })``;
const StyledLabel = styled(BaseStyledComponent).attrs({ as: 'label' })``;
const StyledButton = styled(BaseStyledComponent).attrs({ as: 'span' })``; // Assuming you want a span for a button
const StyledInlineElement = styled(BaseStyledComponent).attrs({ as: 'span' })``;
const StyledContent = styled(BaseStyledComponent).attrs({ as: 'p' })``;
const StyledSmText = styled(BaseStyledComponent).attrs({ as: 'p' })``;
const StyledVerySmText = styled(BaseStyledComponent).attrs({ as: 'span' })``;


// Export the list of typography components
export const TypographyList = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
  label: StyledLabel,
  button: StyledButton,
  inlineElement: StyledInlineElement,
  content: StyledContent,
  smText: StyledSmText,
  verysmText: StyledVerySmText,
};


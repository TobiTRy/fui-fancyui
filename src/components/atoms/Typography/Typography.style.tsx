/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from 'react';
import { styled, CSSProp } from 'styled-components';

import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TTypography } from '@/components/atoms/Typography/Typography.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';

export type TStyledComponentProps = {
  children?: ReactNode;
  $variant?: CSSProp;
};

// Base styled component for common styles
export type TGenerateStyle = IStyledPrefixAndPicker<TTypography, 'weight' | 'themeType' | 'layer' | 'externalStyle'> &
  TStyledComponentProps;
const BaseStyledComponent = styled.span<TStyledComponentProps & TGenerateStyle & { theme: TTheme }>`
  color: ${({ theme, $themeType, $layer = 0 }) => $themeType && getBackgroundColor({ theme, $themeType, $layer })};
  ${({ $variant }) => $variant};
  font-weight: ${({ $weight }) => $weight};
  ${({ $externalStyle }) => $externalStyle}
`;

// Styled components for each type of typography
const StyledH1 = styled(BaseStyledComponent).attrs({ as: 'h1' })``;
const StyledH2 = styled(BaseStyledComponent).attrs({ as: 'h2' })``;
const StyledH3 = styled(BaseStyledComponent).attrs({ as: 'h3' })``;
const StyledH4 = styled(BaseStyledComponent).attrs({ as: 'h4' })``;
const StyledH5 = styled(BaseStyledComponent).attrs({ as: 'h5' })``;
const StyledH6 = styled(BaseStyledComponent).attrs({ as: 'h6' })``;
const StyledLabel = styled(BaseStyledComponent).attrs({ as: 'label' })``;
const StyledInlineElement = styled(BaseStyledComponent).attrs({ as: 'span' })``;
const StyledCaption = styled(BaseStyledComponent).attrs({ as: 'p' })``;
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
  inlineElement: StyledInlineElement,
  caption: StyledCaption,
  smText: StyledSmText,
  verysmText: StyledVerySmText,
};

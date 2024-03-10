import { CSSProp, styled } from 'styled-components';

export const StyledDynamicElementWrapper = styled.div<{ $externalStyle: CSSProp }>`
  ${({ $externalStyle }) => $externalStyle}
`;

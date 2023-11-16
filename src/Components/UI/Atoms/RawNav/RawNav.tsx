import { CSSProp, styled } from 'styled-components';

const RawNav = styled.nav<{$externalStyle?: CSSProp}>`
  width: 100%;
  ${({ $externalStyle }) => $externalStyle};
`;
export default RawNav;

import { styled } from 'styled-components';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TRawA } from '@/components/atoms/RawA/TRawA.model';

type TStyledA = TStyledPrefixAndPicker<TRawA, 'externalStyle'>;
export const StyledRawA = styled.a<TStyledA>`
  text-decoration: none;
  ${({ $externalStyle }) => $externalStyle}
`;

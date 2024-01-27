import { styled, css } from 'styled-components';

import { TStyleProps } from './FancyFlexBox.model';
import IStyledPrefixAndOmitter from '@/types/IStyledPrefixAndOmiter';

const generateFlexSytles = (props: TStyledFlexBoxProps) => {
  const { $direction, $justify, $align, $gap } = props;

  return css`
    display: flex;
    width: 100%;
    flex-direction: ${$direction ?? 'row'};
    justify-content: ${$justify ?? 'flex-start'};
    align-items: ${$align ?? 'flex-start'};
    gap: ${$gap};
  `;
};

type TStyledFlexBoxProps = IStyledPrefixAndOmitter<TStyleProps>;
export const StyledFlexBox = styled.div<TStyledFlexBoxProps & { as: React.ElementType }>`
  padding: 0;
  margin: 0;
  ${(props: TStyledFlexBoxProps) => generateFlexSytles({ ...props })}
  ${({ $externalStyle }) => $externalStyle}
`;

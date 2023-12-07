import { styled, css } from 'styled-components';

import { TStyleProps } from './FancyFlexBox.model';
import IStyledPrefixAndOmitter from '@/interface/IStyledPrefixAndOmiter.model';

const generateFlexSytles = (props: TStyledFlexBoxProps) => {
  const { $flexDirection, $flexJustify, $flexAlign, $gap } = props;

  return css`
    display: flex;
    width: 100%;
    flex-direction: ${$flexDirection ?? 'row'};
    justify-content: ${$flexJustify ?? 'flex-start'};
    align-items: ${$flexAlign ?? 'flex-start'};
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

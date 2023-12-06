import { styled, css } from 'styled-components';

import { TStyleProps } from './FancyFlexBox.model';

import { TTheme } from '@/interface/TTheme';
import IStyledPrefixAndOmitter from '@/interface/IStyledPrefixAndOmiter.model';

const generateFlexSytles = (props: TStyledFlexBoxProps & { theme?: TTheme }) => {
  const { $flexDirection, $flexJustify, $flexAlign, $gap, theme } = props;

  return css`
    display: flex;
    width: 100%;
    flex-direction: ${$flexDirection ?? 'row'};
    justify-content: ${$flexJustify ?? 'flex-start'};
    align-items: ${$flexAlign ?? 'flex-start'};
    gap: ${$gap ?? theme!.spacing.xxs};
  `;
};

type TStyledFlexBoxProps = IStyledPrefixAndOmitter<TStyleProps, 'as'>;
export const StyledFlexBox = styled.div<TStyledFlexBoxProps & { as: React.ElementType }>`
  padding: 0;
  margin: 0;
  ${(props: TStyledFlexBoxProps) => generateFlexSytles({ ...props })}
  ${({ $externalStyle }) => $externalStyle}
`;

import { css, styled } from 'styled-components';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { FancyLine } from '@/components/atoms/FancyLine';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';

export const StepperContainer = styled(FancyFlexBox)`
  justify-content: center;
  width: 100%;
  align-items: flex-start;
`;

type ModifiedLineProps = {
  $marginTop?: string;
  $disabled?: boolean;
};

export const ModifiedLine = styled(FancyLine)<ModifiedLineProps>`
  ${({ direction, $marginTop, thickness }) =>
    direction === 'horizontal'
      ? css`
          margin-top: calc((${$marginTop} - ${thickness}) / 2);
        `
      : css`
          align-self: center;
        `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      ${disabledStyle}
    `}
`;

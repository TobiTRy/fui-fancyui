import { css } from 'styled-components';
import { spacing } from '../../Design/design';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

export interface IcalcIconPaddingAsProps {
  aligned?: 'left' | 'right' | 'center';
  size?: 'sm' | 'md' | 'lg';
}

//this are the values between the icon and the edge of the button
const paddingFromIcon = {
  sm:  spacing.xs + 'px',
  md: spacing.xs + 'px',
  lg:  spacing.xs + 'px',
};

//this funktion handles the spacing between the icon and the text deepends on the alignment
export type IcalcIconPadding = IStyledPrefixAndPicker<IcalcIconPaddingAsProps>;
export function calcIconPaddingAndAlign({ $aligned = 'left', $size = 'md' }: IcalcIconPadding) {
  if ($aligned === 'right') {
    return css`
      padding-left: ${paddingFromIcon[$size]};
      order: 1;
    `;
  } else if ($aligned === 'left' || $aligned === 'center') {
    return css`
      padding-right: ${paddingFromIcon[$size]};
    `;
  }
}


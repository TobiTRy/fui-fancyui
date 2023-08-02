import { css } from 'styled-components';
import { spacing } from '../Design/design';
import IStyledPrefixAndPicker from '../Interface/IStyledPrefixAndPicker.model';

export interface IcalcIconPaddingAsProps {
  aligned?: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
}

//this are the values between the icon and the edge of the button
const paddingFromIcon = {
  small:  spacing.xs + 'px',
  medium: spacing.xs + 'px',
  large:  spacing.xs + 'px',
};

//this funktion handles the spacing between the icon and the text deepends on the alignment
export type IcalcIconPadding = IStyledPrefixAndPicker<IcalcIconPaddingAsProps>;
export function calcIconPaddingAndAlign({ $aligned = 'left', $size = 'medium' }: IcalcIconPadding) {
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


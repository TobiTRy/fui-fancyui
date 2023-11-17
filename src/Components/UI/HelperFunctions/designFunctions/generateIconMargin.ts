import { css } from 'styled-components';
import { spacingPx } from '../../Design/designSizes';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

export interface IcalcIconPaddingAsProps {
  aligned?: 'left' | 'right' | 'center';
  iconAlign?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

//this are the values between the icon and the edge of the button
const paddingFromIcon = {
  sm:  spacingPx.xs,
  md: spacingPx.xs,
  lg:  spacingPx.xs,
};

//this funktion handles the spacing between the icon and the text deepends on the alignment
export type IcalcIconPadding = IStyledPrefixAndPicker<IcalcIconPaddingAsProps>;
export function calcIconMarginAndAlign({ $aligned = 'left', $size = 'md' }: IcalcIconPadding) {
  if ($aligned === 'right') {
    return css`
      margin-left: ${paddingFromIcon[$size]};
      order: 1;
    `;
  } else if ($aligned === 'left' || $aligned === 'center') {
    return css`
      margin-right: ${paddingFromIcon[$size]};
    `;
  }
}


import { css } from 'styled-components';

type TCalcInputPadding = {
  $isActive?: boolean;
  $isLabelProvided?: boolean;
};

export function calcInputPadding(props: TCalcInputPadding) {
  const { $isActive, $isLabelProvided } = props;

  if ($isLabelProvided) {
    if ($isActive) {
      return css`
        padding: 16px 0 4px 0px; //if the input is active and the type is transparent
      `;
    } else {
      return css`
        padding: 12px 0 8px 0px; //if the input is not active and the type is transparent
      `;
    }
  } else {
    if ($isActive) {
      return css`
        padding: 2px 0 2px 0px; //if the input is active and the type is transparent
      `;
    } else {
      return css`
        padding: 2px 0 2px 0px; //if the input is not active and the type is transparent
      `;
    }
  }
}

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
        padding: 16px 10px 4px 0px; //if the input is active and the type is transparent
      `;
    } else {
      return css`
        padding: 12px 10px 8px 0px; //if the input is not active and the type is transparent
      `;
    }
  } else {
    if ($isActive) {
      return css`
        padding: 16px 10px 4px 0px; //if the input is active and the type is transparent
      `;
    } else {
      return css`
        padding: 10px 10px 10px 0px; //if the input is not active and the type is transparent
      `;
    }
  }
}

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
        margin-top: 16px;
        padding: 0 0 4px 0px; //if the input is active and the type is transparent
      `;
    } else {
      return css`
        margin-top: 12px;
        padding: 0 0 8px 0px; //if the input is not active and the type is transparent
      `;
    }
  } else {
    if ($isActive) {
      return css`
        margin-top: 2px;
        padding: 0 0 2px 0px; //if the input is active and the type is transparent
      `;
    } else {
      return css`
        margin-top: 2px;
        padding: 0 0 2px 0px; //if the input is not active and the type is transparent
      `;
    }
  }
}

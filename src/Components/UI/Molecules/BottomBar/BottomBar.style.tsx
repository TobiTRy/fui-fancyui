import { css } from "styled-components";

import { spacingPx } from "../../Design/designSizes";

export const fancyBarStyle = css`
  display: flex;
  padding: ${ ({theme}) => theme.spacing.sm } ${ ({theme}) => theme.spacing.sm } ${ 0 } ${ ({theme}) => theme.spacing.sm };
  width: 100%;

`
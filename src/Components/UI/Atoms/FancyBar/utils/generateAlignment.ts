import { css } from "styled-components";
import IStyledPrefixAndPicker from "../../../Interface/IStyledPrefixAndPicker.model";
import { IFancyBarProps } from "../FancyBar.model";
import { borderRadius } from "../../../Design/design";



type TGenerateHeaderFormat = IStyledPrefixAndPicker<
  IFancyBarProps,
  'rounded' | 'height' | 'spacingLeftRight' | 'width' | 'spacingTopBottom'
>;
export const generateHeaderFormat = (props: TGenerateHeaderFormat) => {
  const { $width, $height, $rounded, $spacingLeftRight, $spacingTopBottom } = props;

  return css`
    top: ${$spacingTopBottom || '0'};
    width: ${$width || '100%'};
    height: ${$height || '3rem'};
    border-radius: ${$rounded && borderRadius[$rounded]};
    padding-left: ${$spacingLeftRight};
    padding-right: ${$spacingLeftRight};
  `;
};
import { CSSProp, styled } from 'styled-components';

import { TgetBorderRadiusViaSize, getBorderRadiusViaSize } from '@/design/designFunctions/getBorderRadiusViaSize';
import { TSize, getSize } from '@/components/molecules/TextAvatar/utils/getSize';

// Styled img component
type TStyledImageProps = {
  $rounded: TgetBorderRadiusViaSize;
  $size: TSize | string;
  $externalStyle?: CSSProp;
};
export const StyledImage = styled.img<TStyledImageProps>`
  border-radius: ${({ $rounded }) => getBorderRadiusViaSize($rounded)};
  width: ${({ $size }) => getSize($size)};
  height: ${({ $size }) => getSize($size)};
  object-fit: cover;
  aspect-ratio: 1/1;
  ${({ $externalStyle }) => $externalStyle}
`;

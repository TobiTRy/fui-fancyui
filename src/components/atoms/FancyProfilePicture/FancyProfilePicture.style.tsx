import { CSSProp, styled } from 'styled-components';

import { getSize } from '@/components/molecules/TextAvatar/utils/getSize';
import { TgetBorderRadiusViaSize, getBorderRadiusViaSize } from '@/design/designFunctions/getBorderRadiusViaSize';
import { TglobalElementSizesWithFit } from '@/types/TGlobalElementSizes';

// Styled img component
type TStyledImageProps = {
  $rounded: TgetBorderRadiusViaSize | 'none';
  $sizeC: TglobalElementSizesWithFit | string;
  $externalStyle?: CSSProp;
};
export const StyledImage = styled.img<TStyledImageProps>`
  border-radius: ${({ $rounded }) => getBorderRadiusViaSize($rounded)};
  width: ${({ $sizeC }) => getSize($sizeC)};
  height: ${({ $sizeC }) => getSize($sizeC)};
  object-fit: cover;
  aspect-ratio: 1/1;
  ${({ $externalStyle }) => $externalStyle}
`;

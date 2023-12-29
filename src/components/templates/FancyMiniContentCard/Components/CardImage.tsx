import { styled } from 'styled-components';

import { FancyImage } from '@/components/atoms/FancyImage';
import { TFancyImage } from '@/components/atoms/FancyImage/FancyImage.model';
import { TTheme } from '@/interface/TTheme';
import { TComponentSizesExtended } from '@/interface/TComponentSizes';
import { globalSizes } from '@/design/theme/globalSizes';

type TCardImage = TFancyImage & {
  inset?: boolean;
  size?: TComponentSizesExtended | 'complete';
};
export default function CardImage(props: TCardImage) {
  const { inset, className, size, ...fancyImageProps } = props;
  return (
    <WarpperImage $inset={inset} $size={size}>
      <FancyImage className={`card_image ${className ?? ''}`} {...fancyImageProps} />
    </WarpperImage>
  );
}

type WrapperImage = {
  $inset?: boolean;
  $size?: TComponentSizesExtended | 'complete';
};
const WarpperImage = styled.div<WrapperImage & { theme: TTheme }>`
  padding: ${({ $inset, theme }) => ($inset ? theme.spacing.sm : '0')};
  width: ${({ $size = 'complete' }) => ($size !== 'complete' ? globalSizes[$size].elementSize : '100%')};
`;

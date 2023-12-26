import { styled } from 'styled-components';

import { FancyImage } from '@/components/atoms/FancyImage';

import { TFancyImage } from '@/components/atoms/FancyImage/FancyImage.model';
import { TTheme } from '@/interface/TTheme';

type TCardImage = TFancyImage & {
  inset?: boolean;
};
export default function CardImage(props: TCardImage) {
  const { inset, ...fancyImageProps } = props;
  return (
    <WarpperImage $inset={inset}>
      <FancyImage {...fancyImageProps} />
    </WarpperImage>
  );
}

type WrapperImage = {
  $inset?: boolean;
};
const WarpperImage = styled.div<WrapperImage & { theme: TTheme }>`
  padding: ${({ $inset, theme }) => ($inset ? theme.spacing.sm : '0')};
`;

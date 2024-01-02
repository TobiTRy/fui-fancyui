import { styled } from 'styled-components';

import { FancyImage } from '@/components/atoms/FancyImage';
import { TFancyImage } from '@/components/atoms/FancyImage/FancyImage.model';
import { TTheme } from '@/types/TTheme';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { globalSizes } from '@/design/theme/globalSizes';

import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { checkThemeValue } from '@/design/designFunctions/checkThemeValue';

type TCardImage = {
  inset?: boolean;
  size?: TComponentSizesExtended | 'complete';
  borderRadius?: string;
};
export default function CardImage(props: TCardImage & Omit<TFancyImage, 'borderRadius'>) {
  const { inset, size, borderRadius, ...fancyImageProps } = props;
  console.log(borderRadius);

  return (
    <WarpperImage $inset={inset} $size={size} $borderRadius={borderRadius}>
      <FancyImage {...fancyImageProps} />
    </WarpperImage>
  );
}

type TWrapperImage = IStyledPrefixAndPicker<TCardImage>;
const WarpperImage = styled.div<TWrapperImage & { theme: TTheme }>`
  box-sizing: border-box;
  width: ${({ $size = 'complete' }) => ($size !== 'complete' ? globalSizes[$size].elementSize : '100%')};

  img {
    border-radius: ${({ $borderRadius, theme }) =>
      checkThemeValue($borderRadius) ? theme.borderRadius[$borderRadius as TBorderRadiusSizes] : $borderRadius};
  }
`;

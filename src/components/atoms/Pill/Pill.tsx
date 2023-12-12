import { StyledPill } from '@/components/atoms/Pill/Pill.style';
import { TBorderRadiusSizes } from '@/interface/TBorderRadiusSizes';
import { sizes } from './sizeSettings';
import { IFancyBoxProps } from '@/components/atoms/FancyBox/FancyBox.model';

export type TPill<T extends React.ElementType = 'div'> = {
  size?: keyof typeof sizes;
  borderRadius?: TBorderRadiusSizes;
  isActive?: boolean;
} & IFancyBoxProps<T>;
export default function Pill<T extends React.ElementType = 'div'>(props: TPill<T>) {
  const { themeType, outlined, layer, externalStyle, size, children, ...htmlProps } = props;

  return (
    <StyledPill
      themeType={themeType}
      outlined={outlined}
      layer={layer || 3}
      $size={size}
      externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledPill>
  );
}

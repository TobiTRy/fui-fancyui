import { CSSProp } from 'styled-components';

import Typography from '../../../atoms/Typography/Typography';
import { sizes } from './sizeSettings';
import { TTypography } from '@/components/Interface/TTypography';

type IFancyContentTextProps = {
  children?: React.ReactNode;
  bold?: boolean;
  className?: string;
  externalStyle?: CSSProp;
};

type IFancyContentTextWithSizeProps = IFancyContentTextProps & {
  size?: 'sm' | 'md' | 'lg';
  fontVariant?: never;
};

type IFancyContentTextWithFontVariantProps = IFancyContentTextProps & {
  fontVariant?: TTypography;
  size?: never;
};

export function FancyContentTitle(
  props: IFancyContentTextProps & (IFancyContentTextWithFontVariantProps | IFancyContentTextWithSizeProps)
) {
  const { size, bold = true, fontVariant, children, className, externalStyle } = props;

  return (
    <Typography
      variant={fontVariant ?? sizes[size || 'lg'].fontSizeTitle}
      weight={bold ? 'bold' : 'normal'}
      type="button"
      className={className}
      style={externalStyle}
    >
      {children}
    </Typography>
  );
}

export function FancyContentDescription(
  props: IFancyContentTextProps & (IFancyContentTextWithFontVariantProps | IFancyContentTextWithSizeProps)
) {
  const { size, bold, fontVariant, children, className, externalStyle } = props;

  return (
    <Typography
      variant={fontVariant ?? sizes[size || 'sm'].fontSizeTitle}
      weight={bold ? 'bold' : 'normal'}
      type="button"
      className={className}
      style={externalStyle}
    >
      {children}
    </Typography>
  );
}

import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TCardSubTitle = Omit<TTypography, 'variant'> & { variant?: TTypographyVariants };
export default function CardSubTitle(props: TCardSubTitle) {
  const { children, variant, ...typoProps } = props;
  return (
    <Typography variant={variant ?? 'subTextCaption'} {...typoProps}>
      {children}
    </Typography>
  );
}

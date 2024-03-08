import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TCardTitle = Omit<TTypography, 'variant'> & { variant?: TTypographyVariants };
export default function CardTitle(props: TCardTitle) {
  const { children, elType, variant, ...typoProps } = props;

  return (
    <Typography variant={variant ?? 'bodytextLg'} elType={elType ?? 'h4'} {...typoProps}>
      {children}
    </Typography>
  );
}

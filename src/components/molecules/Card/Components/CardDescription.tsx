import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TCardDescription = Omit<TTypography, 'variant'> & { variant?: TTypographyVariants };
export default function CardDescription(props: TCardDescription) {
  const { children, elType, variant, ...typoProps } = props;

  return (
    <Typography variant={variant ?? 'bodytextMd'} elType={elType ?? 'p'} {...typoProps}>
      {children}
    </Typography>
  );
}

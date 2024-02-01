import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

export default function CardDescription(props: TTypography) {
  const { children, elType, variant, ...typoProps } = props;

  return (
    <Typography variant={variant ?? 'bodytextMd'} elType={elType ?? 'p'} {...typoProps}>
      {children}
    </Typography>
  );
}

import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

export default function CardTitle(props: TTypography) {
  const { children, elType, variant, ...typoProps } = props;

  return (
    <Typography variant={variant ?? 'bodytextLg'} elType={elType ?? 'h4'} {...typoProps}>
      {children}
    </Typography>
  );
}

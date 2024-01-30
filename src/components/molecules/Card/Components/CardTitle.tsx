import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

export default function CardTitle(props: TTypography) {
  const { children, elType, ...typoProps } = props;
  return (
    <Typography variant="bodytextLg" elType={elType ?? 'h4'} {...typoProps}>
      {children}
    </Typography>
  );
}

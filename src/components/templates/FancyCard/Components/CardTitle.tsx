import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

export default function CardTitle(props: TTypography) {
  const { children, type, ...typoProps } = props;
  return (
    <Typography type={type ?? 'h4'} weight={'normal'} {...typoProps}>
      {children}
    </Typography>
  );
}

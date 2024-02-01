import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

export default function CardSubTitle(props: TTypography) {
  const { children, variant, ...typoProps } = props;
  return (
    <Typography variant={variant ?? 'subTextCaption'} {...typoProps}>
      {children}
    </Typography>
  );
}

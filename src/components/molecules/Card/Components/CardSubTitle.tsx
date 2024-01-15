import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

export default function CardSubTitle(props: TTypography) {
  const { children, type, variant, ...typoProps } = props;
  return (
    <Typography type={type ?? 'content'} variant={variant ?? 'verysmText'} {...typoProps}>
      {children}
    </Typography>
  );
}

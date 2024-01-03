import { Typography } from '@/components/atoms/Typography';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

export default function CardDescription(props: TTypography) {
  const { children, type, variant, ...typoProps } = props;

  return (
    <Typography type={type ?? 'content'} addLineHeight variant={variant ?? 'inlineElement'} {...typoProps}>
      {children}
    </Typography>
  );
}

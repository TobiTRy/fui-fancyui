import { TTypography, Typography } from '@/components/atoms/Typography';
import { css } from 'styled-components';

type TLabel = Partial<TTypography>;

export function Label(props: TLabel) {
  const { children, variant, externalStyle } = props;
  return (
    <Typography
      variant={variant ?? 'bodytextMd'}
      lineHeight={1}
      externalStyle={css`
        overflow: hidden;
        flex: 1;
        white-space: nowrap;
        ${externalStyle}
      `}
    >
      {children}
    </Typography>
  );
}

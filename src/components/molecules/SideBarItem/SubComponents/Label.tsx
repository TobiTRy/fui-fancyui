import { TTypography, Typography } from '@/components/atoms/Typography';
import { css } from 'styled-components';
import { sizeSettings } from '../sizeSettings';
import { TComponentSizesMid } from '@/types/TComponentSizes';

type TLabel = Partial<TTypography> & {
  sizeC?: TComponentSizesMid;
};

export function Label(props: TLabel) {
  const { children, sizeC = 'sm', externalStyle } = props;
  return (
    <Typography
      variant={sizeSettings[sizeC].labelSize}
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

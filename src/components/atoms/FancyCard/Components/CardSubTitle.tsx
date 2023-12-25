import React from 'react';

import { Typography } from '@/components/atoms/Typography';

type TCardSubTitleProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Typography>;
export default function CardSubTitle(props: TCardSubTitleProps) {
  const { children, type, variant, ...typoProps } = props;
  return (
    <Typography type={type ?? 'content'} variant={variant ?? 'h5'} {...typoProps}>
      {children}
    </Typography>
  );
}

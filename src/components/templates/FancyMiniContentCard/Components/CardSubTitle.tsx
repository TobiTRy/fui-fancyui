import React from 'react';

import { Typography } from '@/components/atoms/Typography';

type TCardSubTitleProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Typography>;
export default function CardSubTitle(props: TCardSubTitleProps) {
  const { children, type, variant, className,...typoProps } = props;
  return (
    <Typography className={`card_subtitle ${className ?? ''}`} type={type ?? 'content'} variant={variant ?? 'verysmText'} {...typoProps}>
      {children}
    </Typography>
  );
}

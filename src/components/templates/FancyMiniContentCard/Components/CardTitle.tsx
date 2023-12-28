import React from 'react';

import { Typography } from '@/components/atoms/Typography';

type TCardTitleProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Typography>;
export default function CardTitle(props: TCardTitleProps) {
  const { children, type, className, ...typoProps } = props;
  return (
    <Typography className={`card_title ${className ?? ''}`} type={type ?? 'h4'} weight={'normal'} {...typoProps}>
      {children}
    </Typography>
  );
}

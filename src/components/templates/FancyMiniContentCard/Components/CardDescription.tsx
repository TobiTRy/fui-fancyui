import React from 'react';

import { Typography } from '@/components/atoms/Typography';

type TCardSubTitleProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Typography>;
export default function CardDescription(props: TCardSubTitleProps) {
  const { children, className, type, variant, ...typoProps } = props;
  return (
    <Typography className={`card_description ${className ?? ''}`} type={type ?? 'content'} variant={variant ?? 'inlineElement'} {...typoProps}>
      {children}
    </Typography>
  );
}

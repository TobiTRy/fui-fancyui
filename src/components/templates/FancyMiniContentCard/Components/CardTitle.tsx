import React from 'react';

import { Typography } from '@/components/atoms/Typography';

type TCardTitleProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Typography>;
export default function CardTitle(props: TCardTitleProps) {
  const { children, type, ...typoProps } = props;
  return (
    <Typography type={type ?? 'h4'} {...typoProps}>
      {children}
    </Typography>
  );
}

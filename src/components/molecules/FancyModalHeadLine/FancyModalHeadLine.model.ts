import React from 'react';
import { TFancyLine } from '@/components/atoms/FancyLine';
import { TSpacings } from '@/types/TSpacings';

export type TFancyModalHeadLine = {
  alignCenter?: boolean;
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  gapBetweenText?: TSpacings;
  hr?: TFancyLine | boolean;
  onXButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type TFancyModalHeadLineWithHTMLProps = TFancyModalHeadLine &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

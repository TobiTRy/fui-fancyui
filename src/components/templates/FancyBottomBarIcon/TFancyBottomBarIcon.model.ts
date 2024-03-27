import { ComponentProps } from 'react';
import { BottomBarIcon } from '@/components/molecules/BottomBarIcon';
import { TComponentAndActionWrapper } from '@/components/molecules/ComponentAndActionWrapper';

export type TFancyBottomBarIcon = ComponentProps<typeof BottomBarIcon> & TComponentAndActionWrapper;

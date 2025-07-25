import { FancyBox } from '@/components/atoms/FancyBox';
import { TTheme } from '@/types/TTheme';
import { styled } from 'styled-components';

export const FancyBoxWrapper = styled(FancyBox)<{ theme: TTheme }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
`;

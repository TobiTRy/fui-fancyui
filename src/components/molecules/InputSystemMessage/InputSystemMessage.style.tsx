import { SystemMessage } from '@/components/atoms/SystemMessage';
import { TTheme } from '@/types';
import styled from 'styled-components';

export const Wrapper = styled.div<{ theme: TTheme }>`
  display: flex;
  text-align: start;
  height: 16px;
`;

export const ExtendedSystemMessage = styled(SystemMessage)<{ theme: TTheme }>`
  display: block;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  box-sizing: border-box;
`;

import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';

export const WrapperModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  width: 100%;
  height: 100svh;
  top: 0;
  left: 50%;
  z-index: 100;
  transform: translate(-50%);
`;

export const WrapperAnimated = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

export const ContentBox = styled.div<{ theme: TTheme }>`
  overflow-y: scroll;
  color: ${({ theme }) => theme.color.secondary[0]};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const WrapperContent = styled.div`
  padding: 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

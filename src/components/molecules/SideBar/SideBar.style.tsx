import styled, { css } from 'styled-components';
import { FancyBox } from '@/components/atoms/FancyBox';
import { TTheme } from '@/types/TTheme';

type TStyledSideBar = {
  $isOpen?: boolean;
  $openWidth?: string;
};

export const StyledSideBar = styled(FancyBox)<TStyledSideBar>`
  height: 100%;
  width: 56px;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: var(--borderRadius-sm);
  transition: width 0.2s ease-in-out;

  ${({ $isOpen, $openWidth }) =>
    $isOpen &&
    css`
      width: ${$openWidth ?? '40%'};
    `}

  &::before {
    border-radius: var(--borderRadius-sm);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: var(--background-blur-0);
    z-index: -1;
  }
`;

export const InnerContainer = styled.div<{ theme: TTheme }>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  flex-direction: column;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

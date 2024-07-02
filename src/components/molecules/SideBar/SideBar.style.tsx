import { styled, css } from 'styled-components';
import { FancyBox } from '@/components/atoms/FancyBox';
import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TSideBar } from '@/components/molecules/SideBar/TSideBar.model';
import { sizeSettings } from './sizeSettings';

type TStyledSideBar = TStyledPrefixAndOmiter<TSideBar, 'children'>;
export const StyledSideBar = styled(FancyBox)<TStyledSideBar & { theme: TTheme }>`
  height: 100%;
  width: ${({ theme, $sizeC = 'sm' }) => theme.globalElementSizes[sizeSettings[$sizeC].width]};
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: width 0.2s ease-in-out;

  ${({ $isOpen, $openWidth }) =>
    $isOpen &&
    css`
      width: ${$openWidth ?? '40%'};
    `}
`;

export const InnerContainer = styled.div<{ theme: TTheme }>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  flex-direction: column;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

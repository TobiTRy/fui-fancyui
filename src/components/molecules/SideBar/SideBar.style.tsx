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
  transition: width 0.2s ease-in-out;

  ${({ $isOpen, $openWidth }) =>
    $isOpen &&
    css`
      width: ${$openWidth ?? '40%'};
    `}
`;

type TInnerContainer = {
  $gapBetweenItems: TSideBar['gapBetweenItems'];
  $sizeC: TSideBar['sizeC'];
};
export const InnerContainer = styled.div<{ theme: TTheme } & TInnerContainer>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  gap: ${({ theme, $sizeC = 'sm' }) => theme.spacing[sizeSettings[$sizeC].gapBetweenItems]};
  padding: ${({ theme, $sizeC = 'sm' }) => theme.spacing[sizeSettings[$sizeC].paddingBottomTop]} 0;
  flex-direction: column;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

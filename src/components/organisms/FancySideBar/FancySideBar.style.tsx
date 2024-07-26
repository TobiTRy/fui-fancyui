import { TTheme } from '@/types/TTheme';
import styled from 'styled-components';
import { TFancySideBar } from './TFancySideBar.model';
import { sizeSettings as sideBarSizeSettings } from '@/components/molecules/SideBar/sizeSettings';
import { sizeSettings as originalSizeSettings } from './sizeSetting';
import { TSpacings } from '@/types/TSpacings';

export const ItemWrapper = styled.div<{ theme: TTheme }>`
  position: relative;
`;

export const ChildWrapper = styled.div<{ theme: TTheme; $sizeC: TFancySideBar['sizeC'] }>`
  margin: ${({ theme, $sizeC = 'sm' }) =>
    `0 ${theme.spacing[originalSizeSettings[$sizeC].margin]} 0 ${theme.spacing[originalSizeSettings[$sizeC].margin]}`};
`;

export const SlotTop = styled.div<{ theme: TTheme; $sizeC: TFancySideBar['sizeC'] }>`
  display: flex;
  flex-direction: column;
  margin: ${({ theme, $sizeC = 'sm' }) =>
    `0 ${theme.spacing[originalSizeSettings[$sizeC].margin]} 0 ${theme.spacing[originalSizeSettings[$sizeC].margin]}`};
  gap: ${({ $sizeC = 'sm' }) => `${sideBarSizeSettings[$sizeC].gapBetweenItems}`};
`;

export const SlotBottom = styled.div<{ theme: TTheme; $sizeC: TFancySideBar['sizeC'] }>`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin: ${({ theme, $sizeC = 'sm' }) =>
    `auto ${theme.spacing[originalSizeSettings[$sizeC].margin]} 0 ${theme.spacing[originalSizeSettings[$sizeC].margin]}`};
`;

export const MainItemsWrapper = styled.div<{ theme: TTheme; $gap: TSpacings }>`
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: ${({ $gap = 'sm', theme }) => theme.spacing[$gap]};
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

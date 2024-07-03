import { TTheme } from '@/types/TTheme';
import styled from 'styled-components';
import { TFancySideBar } from './TFancySideBar.model';
import { sizeSettings as sideBarSizeSettings } from '@/components/molecules/SideBar/sizeSettings';
import { sizeSettings as originalSizeSettings } from './sizeSetting';

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
  width: 100%;
  margin-top: auto;
  gap: ${({ theme }) => theme.spacing.xs};
`;

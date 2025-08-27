import { styled } from 'styled-components';
import { TTheme } from '@/types/TTheme';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { FancyBox } from '@/components/atoms/FancyBox';
import { generateBackgroundColor } from '@/design/designFunctions/generateItemTheme/utils/generateBackgroundColor';

export const SearchSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

type TDropdownContainerProps = {
  $isOpen?: boolean;
  $zIndex?: number;
  theme: TTheme;
};
export const DropdownContainer = styled.div<TDropdownContainerProps>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: ${({ $zIndex }) => $zIndex || 1000};
  background: transparent;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease,
    transform 0.2s ease;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
`;

type TItemsListProps = {
  $maxHeight?: string;
  theme: TTheme;
};
export const ItemsList = styled.ul<TItemsListProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xs};
  margin: 0;
  list-style: none;
  max-height: ${({ $maxHeight }) => $maxHeight || '200px'};
  gap: 2px;
  overflow: hidden;
  overflow-y: auto;
`;

export const NoItemsText = styled.div<{ theme: TTheme }>`
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  opacity: 0.6;
  font-style: italic;
  font-size: 0.75rem; /* 12px */
`;

type TSearchItemProps = {
  $isHovered?: boolean;
  $themeType?: TUiColorTypes;
  theme: TTheme;
};

export const SearchItem = styled.li<TSearchItemProps>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  cursor: pointer;
  transition: all 0.15s ease;
  background-color: ${({ $isHovered, theme, $themeType = 'primary' }) =>
    $isHovered ? generateBackgroundColor({ $themeType, $layer: 1 }) : 'transparent'};

  &:hover {
    background-color: ${({ theme, $themeType = 'primary' }) => generateBackgroundColor({ $themeType, $layer: 1 })};
  }
`;

export const SearchSelectBox = styled(FancyBox)`
  min-height: fit-content;
  transition: height 0.3s ease;
  overflow: hidden;
`;

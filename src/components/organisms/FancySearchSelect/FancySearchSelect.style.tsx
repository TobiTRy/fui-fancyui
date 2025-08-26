import { styled } from 'styled-components';
import { generateBackgroundColor } from '@/design/designFunctions/generateItemTheme/utils/generateBackgroundColor';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { FancyBox } from '@/components/atoms/FancyBox';

export const SearchSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ItemsList = styled.ul<{
  $maxHeight?: string;
  theme: TTheme;
}>`
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

export const SearchItem = styled.li<{
  $isHovered?: boolean;
  $themeType?: TUiColorsNotTransparent;
  theme: TTheme;
}>`
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${generateBackgroundColor({ $themeType: 'primary', $layer: 1 })};
  }

  /* Make text smaller */
  .title {
    font-size: 0.875rem; /* 14px */
    font-weight: 500;
    line-height: 1.25;
    margin: 0 !important;
  }

  .description {
    font-size: 0.75rem; /* 12px */
    opacity: 0.7;
    line-height: 1.2;
    margin: 0 !important;
    margin-top: 0 !important;
  }

  /* Override FancyContent's grid gap */
  > span {
    gap: 0 !important;
  }

  > span > .description {
    margin-top: 0 !important;
  }

  /* Make icons/images larger for span layout */
  .icon {
    font-size: 1rem;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NoItemsText = styled.div<{ theme: TTheme }>`
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  opacity: 0.6;
  font-style: italic;
  font-size: 0.75rem; /* 12px */
`;

export const SearchSelectBox = styled(FancyBox)`
  min-height: fit-content;
  transition: height 0.3s ease;
  overflow: hidden;
`;

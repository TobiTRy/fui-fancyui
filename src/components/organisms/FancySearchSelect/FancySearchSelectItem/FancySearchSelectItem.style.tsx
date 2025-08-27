import { generateBackgroundColor } from '@/design/designFunctions/generateItemTheme/utils/generateBackgroundColor';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import styled from 'styled-components';

type TSearchItemProps = {
  $isHovered?: boolean;
  $themeType?: TUiColorsNotTransparent;
  theme: TTheme;
};
export const SearchItem = styled.li<TSearchItemProps>`
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: background-color 0.2s ease;

  background-color: ${({ $isHovered, $themeType = 'primary' }) =>
    $isHovered ? generateBackgroundColor({ $themeType, $layer: 1 }) : 'transparent'};

  &:hover {
    background-color: ${generateBackgroundColor({ $themeType: 'primary', $layer: 1 })};
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

import { css, styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';
import { FancyBox } from '@/components/atoms/FancyBox';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';

const PositionWithLabel = css<{ theme: TTheme }>`
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm} ${theme.spacing.xs}`};
  height: ${({ theme }) => theme.globalElementSizes.lg};
`;

const PositionWithoutLabel = css<{ theme: TTheme }>`
  padding: ${({ theme }) => `2px ${theme.spacing.sm} ${theme.spacing.xxs}`};
  height: ${({ theme }) => theme.globalElementSizes.sm};
`;

type TExtendedFancyBox = {
  $hasLabel?: boolean;
  $isActive?: boolean;
  theme: TTheme;
  $boxShadow?: boolean;
  $autoWidth?: boolean;
  $isDisabled?: boolean;
};
export const ExtendedFancyBox = styled(FancyBox)<TExtendedFancyBox>`
  display: flex;
  gap: 8px;
  border-radius: 12px;
  position: relative;
  align-items: center;
  ${({ $hasLabel }) => ($hasLabel ? PositionWithLabel : PositionWithoutLabel)};

  width: ${({ $autoWidth }) => ($autoWidth ? 'auto' : '100%')};
  ${({ $boxShadow, $isActive, theme }) =>
    $boxShadow &&
    $isActive &&
    css`
      box-shadow: 0 0 0 1px ${theme.color.accent[0]} inset;
    `}

  ${({ $isDisabled }) => $isDisabled && disabledStyle};
`;

// Define the styles for the icon
// eslint-disable-next-line react-refresh/only-export-components
export const generateIconStyle = (hasLabel: boolean) => css<{ theme: TTheme }>`
  flex-shrink: 0;
  margin-top: ${hasLabel ? '10px' : '3px'};
  transition: 0.25s;
  align-self: self-start;
`;

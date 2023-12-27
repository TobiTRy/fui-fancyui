import { css, styled } from 'styled-components';

import { themeStore } from '@/design/theme/themeStore';
import { TUiColorsSystemMessage } from '@/interface/TUiColorsSystemMessage';
import { generateSystemIndicatorStyle } from '@/design/designFunctions/generateSystemIndicatorStyle';

export const ChipContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

/**
 * Generates the style for the ChipList component.
 *
 * @param size - The size of the ChipList ('sm', 'md', 'lg').
 * @param sytemMessage - Optional system message color for the ChipList.
 * @returns The generated style object for the ChipList.
 */

// eslint-disable-next-line react-refresh/only-export-components
export const generateChipListStyle = (size: 'sm' | 'md' | 'lg', sytemMessage?: TUiColorsSystemMessage) => {
  const styemIndicatorStyle = generateSystemIndicatorStyle(sytemMessage);
  const getTheme = themeStore.getState().theme;
  let generatedStyle;

  switch (size) {
    case 'sm':
      generatedStyle = css`
        border-radius: ${getTheme.borderRadius.xxl};
        ul {
          padding: ${getTheme.spacing.md};
          gap: ${getTheme.spacing.sm};
        }
      `;
      break;
    case 'md':
      generatedStyle = css`
        border-radius: ${getTheme.borderRadius.xxl};
        ul {
          padding: ${getTheme.spacing.md};
          gap: ${getTheme.spacing.sm};
        }
      `;
      break;
    case 'lg':
      generatedStyle = css`
        border-radius: ${getTheme.borderRadius.xxl};
        ul {
          padding: ${getTheme.spacing.md};
          gap: ${getTheme.spacing.md};
        }
      `;
  }
  return css`
    ${styemIndicatorStyle}
    ${generatedStyle}
  `;
};

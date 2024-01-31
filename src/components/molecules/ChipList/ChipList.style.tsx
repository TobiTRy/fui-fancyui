import { css, styled } from 'styled-components';

import { themeStore } from '@/design/theme/themeStore';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
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
 * @param sizeC - The sizeC of the ChipList ('sm', 'md', 'lg').
 * @param sytemMessage - Optional system message color for the ChipList.
 * @returns The generated style object for the ChipList.
 */

// eslint-disable-next-line react-refresh/only-export-components
export const generateChipListStyle = (sizeC: 'sm' | 'md' | 'lg', sytemMessage?: TUiColorsSystemMessage) => {
  const styemIndicatorStyle = generateSystemIndicatorStyle(sytemMessage);
  const getTheme = themeStore.getState().theme;
  let generatedStyle;

  switch (sizeC) {
    case 'sm':
      generatedStyle = css`
        border-radius: ${getTheme.borderRadius.lg};
        ul {
          padding: ${getTheme.spacing.md};
          gap: ${getTheme.spacing.sm};
        }
      `;
      break;
    case 'md':
      generatedStyle = css`
        border-radius: ${getTheme.borderRadius.lg};
        ul {
          padding: ${getTheme.spacing.md};
          gap: ${getTheme.spacing.sm};
        }
      `;
      break;
    case 'lg':
      generatedStyle = css`
        border-radius: ${getTheme.borderRadius.lg};
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

import { styled } from 'styled-components';

import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TActionItem } from '@/components/molecules/ActionItem/TActionItem.model';
import { globalElementSizes } from '@/design/theme/globalSizes';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';
import { generateThemeDesignForComponent } from '@/design/designFunctions/generateThemeDesignForComponent';
import { IGenerateThemeDesignForComponent } from '@/design/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';

type TWrapper = TStyledPrefixAndPicker<TActionItem, 'size' | 'disabled'>;
export const Wrapper = styled.div`
  position: relative;
`;

export const ButtonStyle = styled.span<IGenerateThemeDesignForComponent & TWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ $size }) => globalElementSizes[$size ?? 'md']};
  cursor: pointer;

  ${(props: IGenerateThemeDesignForComponent) => generateThemeDesignForComponent({ ...props })};

  aspect-ratio: 1/1;
  border-radius: 50%;

  transition: background-color 0.125s ease-in-out;

  ${({ $disabled }) => $disabled && disabledStyle}
`;

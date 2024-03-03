import { styled } from 'styled-components';

import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TActionItem } from '@/components/atoms/ActionItem/TActionItem.model';
import { globalElementsizes } from '@/design/theme/globalSizes';
import { disabledStyle } from '@/design/designFunctions/disabledStyle';
import { generateThemeDesignForComponent } from '@/design/designFunctions/generateThemeDesignForComponent';
import { IGenerateThemeDesignForComponent } from '@/design/designFunctions/generateThemeDesignForComponent/generateThemeDesignForComponent';

type TWrapper = TStyledPrefixAndPicker<TActionItem, 'size'>;
export const Wrapper = styled.div`
  position: relative;
`;

export const ButtonStyle = styled.span<IGenerateThemeDesignForComponent & TWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ $size }) => globalElementsizes[$size]};
  cursor: pointer;

  ${(props: IGenerateThemeDesignForComponent) => generateThemeDesignForComponent({ ...props })};

  aspect-ratio: 1/1;
  border-radius: 50%;

  transition: background-color 0.125s ease-in-out;

  &:disabled {
    ${disabledStyle}
  }
`;

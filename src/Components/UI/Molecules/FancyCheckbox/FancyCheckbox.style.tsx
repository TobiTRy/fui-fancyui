import { css, styled } from 'styled-components';
import { spacingPx } from '../../Design/designSizes';
import { TAlign, TAlignCheckbox } from './FancyCheckbox.model';


// wraps the whole component and handles the alignment
export const Wrapper = styled.div<{ $align?: TAlign; }>`
  position: relative;
  display: flex;
  justify-content: ${({ $align }) => {
    switch ($align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
    }
  }};
`;

// this wraps the label and the description
// handle the order of the checkbox and label/description
export const LabelWrapper = styled.label<{ $align?: TAlignCheckbox; }>`
  display: flex;
  flex-direction: column;
  gap: ${spacingPx.xxs};
  ${({ $align }) =>
    $align === 'right'
      ? css`
          margin-right: ${spacingPx.sm};
          order: 0;
        `
      : css`
          margin-left: ${spacingPx.sm};
          order: 1;
        `};

  .description {
    margin-left: ${spacingPx.xxs};
  }
`;

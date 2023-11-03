import { CSSProp, css, styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { TSytemMessage } from '../../Design/color/designColor';
import { sytemMessageIndicatorStyle } from '../../HelperFunctions/designFunctions/generateSytemIncicator';

export const FancyBoxStyle = css``;

export const ChipContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const generateChipListStyle = (size: 'sm' | 'md' | 'lg', sytemMessage?: TSytemMessage) => {
  const styemIndicatorStyle = sytemMessageIndicatorStyle(sytemMessage);
  let generatedStyle;

  switch (size) {
    case 'sm':
      generatedStyle = css`
        border-radius: ${borderRadius.xxl};
        ul {
          padding: ${spacingPx.md};
          gap: ${spacingPx.sm};
        }
      `;
      break;
    case 'md':
      generatedStyle = css`
        border-radius: ${borderRadius.xxl};
        ul {
          padding: ${spacingPx.md};
          gap: ${spacingPx.sm};
        }
      `;
      break;
    case 'lg':
      generatedStyle = css`
        border-radius: ${borderRadius.xxl};
        ul {
          padding: ${spacingPx.md};
          gap: ${spacingPx.md};
        }
      `;
  }
  return css`
    ${styemIndicatorStyle}
    ${generatedStyle}
  `;
};
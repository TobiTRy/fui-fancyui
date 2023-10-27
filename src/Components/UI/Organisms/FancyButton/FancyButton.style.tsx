import { css } from 'styled-components';
import { generateBorderRadiusForComponent } from '../../HelperFunctions/designFunctions/generateBorderRadiusForComponent/generateBorderRadiusForComponent';
import { generateComponentPadding } from '../../HelperFunctions/designFunctions/generatePaddingForComponent/generatepaddingForComponent';
import { borderRadius } from '../../Design/design';

const generate1To1Button = ($size: 'sm' | 'md' | 'lg', $outlined?: boolean) => {
  //this makes the button a square (1/1) if there is no $label and a $icon
  const padding = generateComponentPadding({ size: $size ?? 'md', borderThinkness: $outlined ? 1.2 : 0 });

  return css`
    aspect-ratio: 1/1;
    justify-content: center;
    ${padding}
  `;
};

interface IGenerateFancyButton {
  size?: 'sm' | 'md' | 'lg';
  outlined?: boolean;
  oneToOne?: boolean;
  borderRadius?: keyof typeof borderRadius;
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
}

export const generateFancyButton = (props: IGenerateFancyButton) => {
  const { size, borderRadius, outlined, oneToOne, justifyContent } = props;

  return css`
    justify-content: ${justifyContent ?? 'center'};
    ${generateBorderRadiusForComponent(size, borderRadius)};
    ${generateComponentPadding({ size: size ?? 'md', borderThinkness: outlined ? 1.2 : 0, doublePaddingLeftRight: true })};
    ${oneToOne && generate1To1Button(size ?? 'md', outlined)};
  `;
};

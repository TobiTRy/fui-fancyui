import { css } from 'styled-components';
import { generatePadding } from './generatePadding';

interface IGenerateComponentPadding {
  borderThinkness?: number;
  doublePaddingLeftRight?: boolean;
  size: 'sm' | 'md' | 'lg';
}
export const generateComponentPadding = (props: IGenerateComponentPadding) => {
  const { borderThinkness, doublePaddingLeftRight, size } = props;
  const padding = generatePadding(borderThinkness ? -borderThinkness : 0, doublePaddingLeftRight ?? false);

  return css`
    padding: ${padding[size]};
  `;
};

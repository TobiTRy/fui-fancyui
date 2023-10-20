import { css, styled } from 'styled-components';
import { IHeader } from './NewHeader';
import IStyledPrefixAndOmiter from '../../Interface/IStyledPrefixAndOmiter.model';
import { TUiColorsType } from '../../Design/color/designColor';
import generateColorDesign from '../FancyTabSwitch/helperFunctions/generateColorDesign';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { borderRadius } from '../../Design/design';

type TStyledNewHeader = IStyledPrefixAndOmiter<IHeader, 'children'> & { theme: TUiColorsType };

type TGenerateHeaderFormat = IStyledPrefixAndPicker<IHeader, 'width' | 'height' | 'rounded' | 'spacingLeftRight' | 'spacingTop'>;
const generateHeaderFormat = (props: TGenerateHeaderFormat) => {
  const { $width, $height, $rounded, $spacingLeftRight, $spacingTop } = props;

  return css`
    top: ${$spacingTop || '0'};
    width: ${$width || '100%'};
    height: ${$height || '3rem'};
    border-radius: ${$rounded && borderRadius[$rounded]};
    padding-left: ${$spacingLeftRight};
    padding-right: ${$spacingLeftRight};
  `;
};


export const StyledNewHeader = styled.header<TStyledNewHeader>`
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  ${({ $externalStyle }) => $externalStyle}
  ${generateHeaderFormat}
  ${({ $themeType, theme, $outlined, $rounded, $layer = 1, $outlinedBackgroundStrength = 0.8 }) =>
    generateColorDesign({ $themeType, theme, $outlined, $padding: undefined, $rounded, $layer, $outlinedBackgroundStrength })}
`;

import { css, styled } from 'styled-components';
import { IHeader } from './NewHeader';
import IStyledPrefixAndOmiter from '../../Interface/IStyledPrefixAndOmiter.model';
import { TUiColorsType } from '../../Design/color/designColor';
import generateColorDesign from '../FancyTabSwitch/helperFunctions/generateColorDesign';

type TStyledNewHeader = IStyledPrefixAndOmiter<IHeader, 'children'> & { theme: TUiColorsType };


export const StyledNewHeader = styled.header<TStyledNewHeader>`
  position: fixed;
  height: 3rem;
  width: 100%;
  top: 0;
  left: 0;
  ${({$themeType, theme, $outlined, $rounded, $layer = 1 }) => generateColorDesign({ $themeType, theme, $outlined, $padding: undefined, $rounded, $layer })}
`;

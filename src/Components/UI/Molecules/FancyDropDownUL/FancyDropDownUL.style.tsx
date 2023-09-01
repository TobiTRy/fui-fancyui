import { styled, css } from 'styled-components';
import CalculateBorderRadiusOnAlignment from '../../HelperFunctions/designFunctions/CalculateBorderRadiusOnAlignment';
import { IFancyUL } from './FancyDropDownUL';
import { spacingPx, uiColors } from '../../Design/design';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { boxShadow } from '../../Design/shadows';

// --------------------------------------------------------------------------- //
// ------- the generator function for the Wrapper of the UL ------------------ //
// --------------------------------------------------------------------------- //
type IStyledUL = IStyledPrefixAndPicker<IFancyUL, 'width' | 'alignHorizontal' | 'alignVertical'>;
const generateWrapperUL = (props: IStyledUL) => {
  const { $width, $alignHorizontal, $alignVertical } = props;
  const setBorderRadius = CalculateBorderRadiusOnAlignment({ $alignHorizontal, $alignVertical });

  return css`
    ${setBorderRadius};
    position: absolute;
    overflow: hidden;
    width: ${$width};
    z-index: 100;
  `;
};

//this generates the wrapper for the UL
export const WrapperUL = styled.div<IStyledUL>`
  ${(props) => generateWrapperUL(props)};
`;

// --------------------------------------------------------------------------- //
// ------------------- the UL for the items and the style -------------------- //
// --------------------------------------------------------------------------- //
export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  padding: ${spacingPx.lg};
  background-color: ${uiColors.primary.lighter};
  ${boxShadow.lg}
  gap: ${spacingPx.xs};
  overflow: hidden;

  li {
    list-style: none;
  }
`;

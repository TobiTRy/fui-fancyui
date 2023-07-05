import { css, styled } from "styled-components";
import { borderRadius } from "../../Design/design";
import { generatePadding } from "../../HelperFunctions/generatePadding";
import IStyledPrefixAndOmiter from "../../Interface/IStyledPrefixAndOmiter.model";
import { IFancyLi } from "./FancyLI";
import { calcIconPaddingAndAlign } from "../../HelperFunctions/generateIconPadding";

type StyledFancyLi = IStyledPrefixAndOmiter<IFancyLi, 'label' | 'icon'>;

// generator function that creates the style for the fancy li
const genreateFantyLi = (props: StyledFancyLi) => {
  const { $size, $aligned, $wide } = props;

  const generateBorderRadius = $wide ? borderRadius!.large : borderRadius[$size!];
  
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: ${generatePadding(0.5)[$size!]};
    width: ${$wide ? '100%' : 'initial'};
    
    border-radius: ${generateBorderRadius};

    & i {
      display: flex;
      ${calcIconPaddingAndAlign({aligned: $aligned, size: $size })}
      align-items: center;
    }
  `;
};

// --------------------------------------------------------------------------- //
// ----- The Main List Item that calls the generator to create the style ----- //
// --------------------------------------------------------------------------- //
const FancyLiItem = styled.li<StyledFancyLi>`
  ${(props: StyledFancyLi) => genreateFantyLi(props)}
`;


export default FancyLiItem;
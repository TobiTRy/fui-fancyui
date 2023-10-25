import styled, { css } from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';
import { spacing, borderRadius } from '../../Design/design';
import { IActiveSwitchIndicator } from './SwitchActiveIndicator';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';

// Define the function to generate a blob background for the active indicator
type IGenerateBlob = Pick<IActiveSwitchIndicator, '$themeType' | '$outlined' | '$rounded' | '$layer' > & { theme: TUiColorsType };
const generateBlob = (props: IGenerateBlob) => {
  const { $themeType, theme, $rounded, $outlined, $layer } = props;
  let backgroundStyle;

  // Get the background color for the active indicator
  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType ?? 'accent', $layer: $layer ?? 0 });

  // Check if the provided rounded value is a valid key in the borderRadius object
  const isRadiusKey = $rounded ? Object.keys(borderRadius).includes($rounded) : false;

  // If the outlined prop is true, generate a slightly transparent background color and a border
  if ($outlined) {
    const generateSlightBackgroundColor = colorTransparencyCalculator(
      getBackgroundColor({ theme, $themeType: $themeType ?? 'accent', $layer: $layer ?? 3 }),
      0.2
    );

    backgroundStyle = css`
      background-color: ${generateSlightBackgroundColor};
      border: 1px solid ${backgroundColor};
      box-sizing: border-box;
    `;
  } else {
    // If the outlined prop is false, use the background color as the background style
    backgroundStyle = css`
      background-color: ${backgroundColor};
    `;
  }

  // Return the styled-component CSS for the active indicator
  return css`
    top: 0;
    height: 100%;
    border-radius: ${isRadiusKey ? borderRadius[$rounded as keyof typeof borderRadius] : $rounded};
    ${backgroundStyle}
  `;
};

// Define the function to generate an underline for the active indicator
type IGenerateUnderline = Pick<IActiveSwitchIndicator, '$themeType' |'$layer'> & { theme: TUiColorsType };
const generateUnderline = ({ theme, $themeType = 'accent', $layer }: IGenerateUnderline) => {
  // Get the background color for the active indicator
  const backgroundColor = getBackgroundColor({ theme, $themeType, $layer });

  // Return the styled-component CSS for the active indicator
  return css`
    top: 2px;
    box-sizing: border-box;
    height: 100%;
    border-bottom: 1.5px solid ${backgroundColor};
    border-radius: 0;
  `;
};

// Define the function to calculate the current position of the active indicator
type IClacCurrentPosition = Pick<IActiveSwitchIndicator, '$itemNumber' | '$tabSpacing' | '$direction'>;
const clacCurrentPosition = (props: IClacCurrentPosition) => {
  const { $itemNumber, $tabSpacing, $direction } = props;

  // Calculate the position in percent
  const itemPosition = ($itemNumber - 1) * 100 + '%';

  // Calculate the gap between the items
  const gapSpacing = $tabSpacing ? ($itemNumber - 1) * spacing[$tabSpacing] : 0;

  // Calculate the current position of the active indicator
  const currentPosition = $itemNumber
    ? css`
        ${$direction === 'vertical'
          ? css`
              transform: translateY(calc(${itemPosition} + ${gapSpacing + 'px'}));
            `
          : css`
              transform: translateX(calc(${itemPosition} + ${gapSpacing + 'px'}));
            `}
      `
    : css`
        transform: translateX(0);
      `;

  // Return the styled-component CSS for the active indicator
  return currentPosition;
};

// --------------------------------------------------------------------------- //
// -------- Here is the main Generator Function of the activ indicator ------- //
// --------------------------------------------------------------------------- //
export const ActiveSwitchIndicator = styled.i<IActiveSwitchIndicator & { theme: TUiColorsType }>`
  position: absolute;
  left: 0;
  width: 100%;

  /* Build a switch case */
  ${(props) => {
    switch (props.$type) {
      case 'underline':
        return generateUnderline({ ...props });
      case 'bolb':
      default:
        return generateBlob({ ...props });
    }
  }}

/* Calculate the current position of the active indicator */
${({ $itemNumber, $tabSpacing, $direction }) => clacCurrentPosition({ $itemNumber, $tabSpacing, $direction })}
  transition: transform 0.2s ease;
`;

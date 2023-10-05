import React from 'react';

import styled, { css } from 'styled-components';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TUiColorsType } from '../../Design/color/designColor';
import { IBorderRadius, borderRadius, spacing, spacingPx } from '../../Design/design';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';

type IGenerateBlob = Pick<IActiveSwitchIndicator, '$themeType' | '$outlined' | '$rounded'> & { theme: TUiColorsType };
const generateBlob = (props: IGenerateBlob) => {
  const { $themeType, theme, $rounded, $outlined } = props;
  let backgroundStyle;

  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'accent', $layer: 0 });

  const isRadiusKey = $rounded ? Object.keys(borderRadius).includes($rounded) : false;

  if ($outlined) {
    const generateSlightBackgroundColor = colorTransparencyCalculator(
      getBackgroundColor({ theme, $themeType: $themeType || 'accent', $layer: 3 }),
      0.2
    );

    backgroundStyle = css`
      background-color: ${generateSlightBackgroundColor};
      border: 1px solid ${backgroundColor};
      box-sizing: border-box;
    `;
  } else {
    backgroundStyle = css`
      background-color: ${backgroundColor};
    `;
  }

  return css`
    top: 0;
    height: 100%;
    background-color: ${backgroundColor};
    border-radius: ${isRadiusKey ? borderRadius[$rounded as keyof IBorderRadius] : $rounded};
    ${backgroundStyle}
  `;
};

const ActiveSwitchIndicator = styled.i<IActiveSwitchIndicator & { theme: TUiColorsType }>`
  position: absolute;
  left: 0;
  width: 100%;

  /* Build a siwtch case */
  ${(props) => {
    switch (props.$type) {
      case 'underline':
        return css`
          top: 0;
          box-sizing: border-box;
          height: 100%;
          border-bottom: 1px solid ${getBackgroundColor({ theme: props.theme, $themeType: 'accent' })};
          border-radius: 0;
          z-index: 1;
        `;
      case 'bolb':
      default:
        return generateBlob({ ...props });

    }
  }}
  transition: transform 0.2s ease;

  ${({ $itemNumber, $tabSpacing, $direction }) => {
    const itemPosition = ($itemNumber - 1) * 100 + '%';
    const gapSpacing = $tabSpacing ? ($itemNumber - 1) * spacing[$tabSpacing] : 0;
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
    return currentPosition;
  }};
`;

interface IActiveSwitchIndicator {
  $itemNumber: number; // the itemnumber is to calc the position of the indicator for each item
  $themeType?: keyof TUiColorsType;
  $tabSpacing?: keyof typeof spacingPx; // the spacing is to calc the position of the indicator for each item
  $type?: 'bolb' | 'underline';
  $rounded?: keyof IBorderRadius | string;
  $outlined?: boolean;
  $direction?: 'horizontal' | 'vertical';
}
export default function SwitchActiveIndicator(props: IActiveSwitchIndicator) {
  return <ActiveSwitchIndicator {...props} />;
}

import React from 'react';

import styled, { css } from 'styled-components';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TUiColorsType } from '../../Design/color/designColor';
import { IBorderRadius, borderRadius, spacing, spacingPx } from '../../Design/design';
import colorTransparencyCalculator from '../../Design/color/colorTransparencyCalculator';

type IGenerateBlob = Pick<IActiveSwitchIndicator, '$themeType' | '$outlined' | '$rounded'> & { theme: TUiColorsType };
const generateBlob = (props: IGenerateBlob) => {
  const { $themeType, theme, $rounded, $outlined } = props;

  const backgroundColor = getBackgroundColor({ theme, $themeType: $themeType || 'accent', $layer: 0 });
  let backgroundStyle;

  if ($outlined) {
    const generateSlightBackgroundColor = colorTransparencyCalculator(
      getBackgroundColor({ theme, $themeType: $themeType || 'accent', $layer: 3 }),
      0.3
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
    border-radius: ${$rounded && borderRadius[$rounded]};
    ${backgroundStyle}
  `;
};

const ActiveSwitchIndicator = styled.i<IActiveSwitchIndicator & {theme: TUiColorsType}>`
  position: absolute;
  left: 0;
  width: 100%;
  /* Build a siwtch case */
  ${(props) => {
    switch (props.$type) {
      case 'bolb':
        return generateBlob({ ...props });
      case 'underline':
        return css`
          bottom: 0;
          height: 1.5px;
        `;
      case 'overline':
        return css`
          top: 0;
          height: 1.5px;
          border-radius: 5px;
        `;
      default:
        return css`
          border-radius: 50%;
        `;
    }
  }}
  /* ${({ theme, $themeType = 'accent' }) => {
    const backgroundColor = getBackgroundColor({ theme, $themeType });
    if ($themeType === 'transparent')
      return css`
        bottom: 0;
        height: 1.5px;
        border-radius: 5px;
        background-color: ${getBackgroundColor({ theme, $themeType: 'accent' })};
      `;

    return css`
      top: 0;
      background-color: ${backgroundColor};
      border-radius: 50px;
      height: 100%;
    `;
  }}; */
  transition: transform 0.2s ease;

  ${({ $itemNumber, $tabSpacing }) => {
    const itemPosition = ($itemNumber - 1) * 100 + '%';
    const gapSpacing = $tabSpacing ? ($itemNumber - 1) * spacing[$tabSpacing] : 0;
    const currentPosition = $itemNumber
      ? css`
          transform: translateX(calc(${itemPosition} + ${gapSpacing + 'px'}));
        `
      : css`
          transform: translateX(0);
        `;
    return currentPosition;
  }};
`;

interface IActiveSwitchIndicator {
  $itemNumber: number;
  $themeType?: keyof TUiColorsType;
  $tabSpacing?: keyof typeof spacingPx;

  $type?: 'bolb' | 'underline' | 'overline';
  $rounded?: keyof IBorderRadius;
  $outlined?: boolean;
}
export default function SwitchActiveIndicator(props: IActiveSwitchIndicator) {
  return <ActiveSwitchIndicator {...props} />;
}

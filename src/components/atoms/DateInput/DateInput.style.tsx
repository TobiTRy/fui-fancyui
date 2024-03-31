import { css, styled } from 'styled-components';

import { RawInput, TRawInputWith$ } from '@/components/atoms/RawInput';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';

import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';
import { getSimpleColorThemeType } from '@/design/designFunctions/getSimpleColorThemeType';
import { TTheme } from '@/types/TTheme';

type IRawInputWrapper = {
  $isActive?: boolean;
} & TRawInputWith$;
export const StyledDatePicker = styled(RawInput)<IRawInputWrapper & { theme: TTheme }>`
  color: ${({ $isActive, $themeType = 'secondary', $layer, theme }) =>
    $isActive ? getBackgroundColor({ theme, $themeType, $layer }) : 'transparent'};

  transition: color 0.3s ease-in;
  font-family: inherit;

  /* This renders a Placerholder in Text when its needed */
  ${({ placeholder, $themeType = 'secondary', $layer = 4, value, theme, $align, $isActive }) => {
    if (placeholder && !value) {
      return css`
        &:not(:focus):before {
          content: ${$isActive ? '' : 'attr(placeholder)'};
          width: 100%;
          text-align: ${$align};
          color: ${getBackgroundColor({
            theme,
            $themeType: getOpositMainThemeType(getSimpleColorThemeType($themeType)),
            $layer,
          })};
          position: absolute;
          transition: all 0.25s ease-in-out;
          pointer-events: none;
        }
      `;
    }
  }}

  /* This renders the calendar Icon with the color theme */
  &::-webkit-calendar-picker-indicator {
    ${simpleColorTransition}

    ${({ theme, $themeType = 'secondary', $layer = 0 }) => css`
      background-image: ${`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="${getBackgroundColor(
        { theme, $themeType, $layer }
      ).replace(
        '#',
        '%23'
      )}" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>')`};
    `};
  }
`;
import { css } from 'styled-components';
import { TTheme } from '@/types/TTheme';
import { TFancyGridTemplate } from '@/components/templates/FancyGridTemplate';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';

type TgenerateTemplateAreas = IStyledPrefixAndPicker<TFancyGridTemplate, 'gridAreas'>;
export const generateTemplateAreas = ({ $gridAreas }: TgenerateTemplateAreas) => {
  // if there is no gridAreas then return
  if (!$gridAreas) return;

  // if gridAreas is only an array of strings then use it
  return css`
    grid-template: ${generateAreas($gridAreas)};
  `;
};

type TgenerateBreakPointAreas = IStyledPrefixAndPicker<TFancyGridTemplate, 'gridAreasBreakPoints'> & { theme: TTheme };
export const generateBreakPointAreas = (props: TgenerateBreakPointAreas) => {
  const { $gridAreasBreakPoints, theme } = props;

  // if there is no gridAreasBreakPoints then return
  if (!$gridAreasBreakPoints) return;

  // is gridAreasBreakPoints is an object then use it to generate the grid-template
  // for each breakpoint generate a media query with the grid-template
  return css`
    ${Object.keys($gridAreasBreakPoints).map((key) => {
      const breakPoint = key as keyof typeof theme.breakpoints;

      // get the value string from the array 'a a a a'
      const templateString = $gridAreasBreakPoints[breakPoint];

      // get the breakPoint value from the theme
      const breakpointValue = theme.breakpoints[breakPoint];

      return css`
        @media ${breakpointValue} {
          grid-template: ${generateAreas(templateString)};
        }
      `;
    })}
  `;
};

const generateAreas = (arrayStrings?: string[]) => {
  return arrayStrings ? arrayStrings.map((area) => `"${area}"`).join(' ') : '';
};

import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from "@/Components/UI/Interface/TLayer";import { generateNormalStyle } from './utils/generateNormalStyle';
import { generateTransparentStyle } from './utils/generateTransparentStyle';
import { generateOutlineStyle } from './utils/generateOutlineStyle';

import IStyledPrefixAndPicker from '../../../Interface/IStyledPrefixAndPicker.model';
import { getSimpletColorThemeType } from '../getOpositColorThemeType';
import { TTheme } from '@/Components/UI/Interface/TTheme';

export interface IGenerateThemeDesignForComponentProps {
  themeType?: TUiColors;
  hoverColor?: Exclude<TUiColors, 'transparent'>;
  textColor?: Exclude<TUiColors, 'transparent'>;
  textHover?: Exclude<TUiColors, 'transparent'>;
  layer?: TLayer;
  outlined?: boolean;
  backgroundStrength?: number;
  backgroundState?: 'hover' | 'active';
  useSimpleTextColor?: boolean;
}

export type IGenerateThemeDesignForComponent = IStyledPrefixAndPicker<IGenerateThemeDesignForComponentProps> & { theme: TTheme };
// --------------------------------------------------------------------------- //
// -------  The main function to generate a style for the components -- ------ //
// --------------------------------------------------------------------------- //
export default function generateThemeDesignForComponent(props: IGenerateThemeDesignForComponent) {
  const { $themeType, theme, $outlined, $layer, $backgroundStrength, $backgroundState, $hoverColor, $textColor, $useSimpleTextColor, $textHover } =
    props;

  const calcTextColor = $useSimpleTextColor ? ($textColor ? $textColor : getSimpletColorThemeType($themeType)) : $textColor;

  if ($themeType === 'transparent') {
    return generateTransparentStyle({ theme, $backgroundState, $hoverColor, $layer, $textColor: calcTextColor, $textHover });
  } else if ($outlined) {
    return generateOutlineStyle({ $themeType, theme, $backgroundStrength, $backgroundState, $hoverColor, $textColor: calcTextColor, $layer });
  } else {
    return generateNormalStyle({ $themeType, theme, $layer, $backgroundState, $textColor: calcTextColor, $hoverColor });
  }
}

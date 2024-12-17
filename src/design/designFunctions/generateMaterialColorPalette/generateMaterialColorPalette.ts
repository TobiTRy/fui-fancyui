import { hexToHSL } from '@/design/designFunctions/hexToHSL/hexToHSL';
import { hslToHex } from '@/design/designFunctions/hslToHex/hslToHex';
import { TShades } from '@/types/TShades';

type TgenerateMaterialColorPalette = {
  baseHex: string;
  isLightTheme?: boolean;
};

export function generateMaterialColorPalette(props: TgenerateMaterialColorPalette): Record<TShades, string> {
  const { baseHex, isLightTheme } = props;
  const { h, s } = hexToHSL(baseHex);

  if (isLightTheme) {
    return {
      50: hslToHex(h, s, 98),
      100: hslToHex(h, s, 95),
      200: hslToHex(h, s, 90),
      300: hslToHex(h, s, 80),
      400: hslToHex(h, s, 70),
      500: hslToHex(h, s, 60), // Consistent with progression
      600: hslToHex(h, s, 49),
      700: hslToHex(h, s, 37),
      800: hslToHex(h, s, 26),
      900: hslToHex(h, s, 17),
      950: hslToHex(h, s, 10),
    };
  } else {
    return {
      50: hslToHex(h, s, 20),
      100: hslToHex(h, s, 30),
      200: hslToHex(h, s, 40),
      300: hslToHex(h, s, 50),
      400: hslToHex(h, s, 55),
      500: hslToHex(h, s, 60), // Consistent with progression
      600: hslToHex(h, s, 70),
      700: hslToHex(h, s, 80),
      800: hslToHex(h, s, 90),
      900: hslToHex(h, s, 95),
      950: hslToHex(h, s, 98),
    };
  }
}

import { hexToHSL } from '@/design/designFunctions/hexToHSL/hexToHSL';
import { hslToHex } from '@/design/designFunctions/hslToHex/hslToHex';

type TgenerateMaterialColorPalette = {
  baseHex: string;
  isLightTheme?: boolean;
};

export const generateMaterialColorPalette = ({ baseHex, isLightTheme }: TgenerateMaterialColorPalette) => {
  const { h, s } = hexToHSL(baseHex);

  if (isLightTheme) {
    return {
      '50': hslToHex(h, s, 97),
      '100': hslToHex(h, s, 92),
      '200': hslToHex(h, s, 85),
      '300': hslToHex(h, s, 75),
      '400': hslToHex(h, s, 65),
      '500': hslToHex(h, s, 60), // Consistent with progression
      '600': hslToHex(h, s, 55),
      '700': hslToHex(h, s, 45),
      '800': hslToHex(h, s, 35),
      '900': hslToHex(h, s, 25),
    };
  } else {
    return {
      '50': hslToHex(h, s, 20),
      '100': hslToHex(h, s, 30),
      '200': hslToHex(h, s, 40),
      '300': hslToHex(h, s, 50),
      '400': hslToHex(h, s, 55),
      '500': hslToHex(h, s, 60), // Consistent with progression
      '600': hslToHex(h, s, 70),
      '700': hslToHex(h, s, 80),
      '800': hslToHex(h, s, 90),
      '900': hslToHex(h, s, 95),
    };
  }
};

import { FancyBox } from '@/components/atoms/FancyBox';
import { Typography } from '@/components/atoms/Typography';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { generateMaterialColorPalette } from '@/design/designFunctions/generateMaterialColorPalette/generateMaterialColorPalette';
import { hexToHSL } from '@/design/designFunctions/hexToHSL/hexToHSL';
import { useState } from 'react';

export default function MaterialColorGeneratorRoute() {
  const [baseColor, setBaseColor] = useState('#f32020');
  const [isDark, setIsDark] = useState(false);

  const palette = generateMaterialColorPalette({ baseHex: baseColor, isLightTheme: !isDark });

  const getContrastText = (bgColor: string) => {
    const { l } = hexToHSL(bgColor);
    return l > 60 ? '#000000' : '#FFFFFF';
  };

  return (
    <FancyBox>
      <FancyFlexBox direction="column">
        <Typography variant="bodytextLg">Material Color Palette</Typography>
        <button onClick={() => setIsDark(!isDark)}>{isDark ? 'isDark' : 'IsLight'}</button>
      </FancyFlexBox>
      <FancyBox>
        <div>
          <input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} />
          <span>{baseColor}</span>
        </div>

        <FancyFlexBox direction="column" align="stretch" justify="center" gap={'sm'}>
          {Object.entries(palette).map(([weight, color]) => (
            <FancyBox
              themeType="transparent"
              borderRadius={'md'}
              padding={'sm'}
              key={weight}
              style={{
                backgroundColor: color,
                color: getContrastText(color),
              }}
            >
              <FancyFlexBox justify="space-around" align="center">
                <div className="w-16 font-medium">{weight}</div>
                <div>{color.toUpperCase()}</div>
              </FancyFlexBox>
            </FancyBox>
          ))}
        </FancyFlexBox>

        <div>
          <p>Usage in CSS:</p>
          <code>{`--color-primary-${isDark ? 'dark' : 'light'}: ${baseColor};`}</code>
        </div>
      </FancyBox>
    </FancyBox>
  );
}

import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { TextGradient } from '@/components/atoms/TextGradient';
import { themeStore } from '@/design/theme/themeStore';
import { Typography } from '@/components/atoms/Typography';
import { TGradientColor } from '@/components/atoms/TextGradient/TextGradient.model';

const themeColors = themeStore.getState().theme.colors;

const colorsArray: TGradientColor[] = [
  {
    color: themeColors.accent[1],
    stop: '15%',
  },
  {
    color: themeColors.secondary[3],
    stop: '50%',
  },
];

export default function TextGradientRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="TextGradient">
        <TextGradient colors={colorsArray} orientation="repeatLinear" degree={90}>
          <Typography variant="displayHeadline">FUIIIIII</Typography>
        </TextGradient>
      </DesignArea>
    </DesignWrapper>
  );
}

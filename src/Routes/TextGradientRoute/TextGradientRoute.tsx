import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import { TextGradient } from '@/components/atoms/TextGradient';
import { themeStore } from '@/design/theme/themeStore';
import { Typography } from '@/components/atoms/Typography';
import { TGradientColor } from '@/components/atoms/TextGradient/TTextGradient.model';

const themeColors = themeStore.getState().theme.color;

const colorsArray: TGradientColor[] = [
  {
    color: themeColors.accent[0],
    stop: '50%',
  },
  {
    color: themeColors.secondary[4],
  },
];

export default function TextGradientRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="TextGradient">
        <TextGradient colors={colorsArray} orientation="linear" position="bottom-left">
          <Typography variant="displayHeadline">FUIIIIII</Typography>
        </TextGradient>
      </DesignArea>
    </DesignWrapper>
  );
}

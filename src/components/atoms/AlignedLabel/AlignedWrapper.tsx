import { AlignedLabel } from '@/components/atoms/AlignedLabel';
import { themeStore } from '@/design/theme/themeStore';
import { ThemeProvider } from 'styled-components';

export default function AlignedWrapper() {
  const getTheme = themeStore((state) => state.theme);

  return (
    <ThemeProvider theme={getTheme}>
      <AlignedLabel>AlignedLabel</AlignedLabel>
    </ThemeProvider>
  );
}

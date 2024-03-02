import { Typography } from '@/components/atoms/Typography';
import { Wrapper, ButtonStyle } from './ActionItem.style';
import { TActionItem } from '@/components/atoms/ActionItem/TActionItem.model';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { calcPostionToFlex } from '@/components/atoms/ActionItem/utils/calcPostionToFlex';

import { sizeSettings } from './sizeSettings';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export default function ActionItem(props: TActionItem) {
  const {
    label = 'Test',
    icon,
    labelAlign = 'left',
    layer = 0,
    size = 'md',
    isActive = false,
    isClickable = true,
  } = props;

  return (
    <FancyFlexBox direction={calcPostionToFlex(labelAlign ?? 'left')} align="center" gap="8px">
      {label && <Typography variant={sizeSettings[size].fontSite}>{label}</Typography>}
      <ButtonStyle
        $size={size}
        $layer={layer}
        $themeType={isActive ? 'accent' : 'primary'}
        $hoverColor={isActive ? 'accent' : 'primary'}
        $backgroundState={isClickable ? 'hover' : 'active'}
      >
        {icon}
      </ButtonStyle>
    </FancyFlexBox>
  );
}

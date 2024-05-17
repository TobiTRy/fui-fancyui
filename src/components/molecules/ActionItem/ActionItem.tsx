import { Typography } from '@/components/atoms/Typography';
import { TActionItem } from '@/components/molecules/ActionItem/TActionItem.model';
import { calcPostionToFlex } from '@/components/molecules/ActionItem/utils/calcPostionToFlex';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { ButtonStyle } from './ActionItem.style';

import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ---------- The ActionItem is a button that inidacts a action -------------- //
// ----------------------------------- ---------------------------------------- //
export default function ActionItem(props: TActionItem) {
  const {
    label,
    icon,
    labelAlign = 'left',
    layer = 0,
    themeType = 'primary',
    themeTypeActiveHover = 'accent',
    size = 'md',
    isActive = false,
    isClickable = true,
    ...htmlProps
  } = props;

  return (
    <FancyFlexBox direction={calcPostionToFlex(labelAlign ?? 'left')} align="center" gap="8px" {...htmlProps}>
      {label && <Typography variant={sizeSettings[size].fontSize}>{label}</Typography>}
      <ButtonStyle
        $size={size}
        $layer={layer}
        $themeType={isActive ? themeTypeActiveHover : themeType}
        $hoverColor={isActive ? themeTypeActiveHover : themeType}
        $backgroundState={isClickable ? 'hover' : 'active'}
      >
        {icon}
      </ButtonStyle>
    </FancyFlexBox>
  );
}

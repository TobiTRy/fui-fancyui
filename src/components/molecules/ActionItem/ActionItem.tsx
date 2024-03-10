import { TActionItem } from '@/components/molecules/ActionItem/TActionItem.model';
import { calcPostionToFlex } from '@/components/molecules/ActionItem/utils/calcPostionToFlex';
import { Typography } from '@/components/atoms/Typography';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { ButtonStyle } from './ActionItem.style';

import { sizeSettings } from './sizeSettings';
import { DynamicElementWrapper } from '@/components/atoms/DynamicElementWrapper';

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
    <DynamicElementWrapper {...htmlProps}>
      <FancyFlexBox direction={calcPostionToFlex(labelAlign ?? 'left')} align="center" gap="8px">
        {label && <Typography variant={sizeSettings[size].fontSite}>{label}</Typography>}
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
    </DynamicElementWrapper>
  );
}

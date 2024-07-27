'use client';

import { Typography } from '@/components/atoms/Typography';
import { TActionItemWithHTMLProps } from '@/components/molecules/ActionItem/TActionItem.model';
import { calcPostionToFlex } from '@/components/molecules/ActionItem/utils/calcPostionToFlex';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { ButtonStyle } from './ActionItem.style';

import { sizeSettings } from './sizeSettings';
import DisabledStyleBox from '@/components/atoms/DisableBox/DisabledBox';

// --------------------------------------------------------------------------- //
// ---------- The ActionItem is a button that inidacts a action -------------- //
// ----------------------------------- ---------------------------------------- //
export default function ActionItem(props: TActionItemWithHTMLProps) {
  const {
    label,
    icon,
    layer = 0,
    size = 'md',
    isActive = false,
    isClickable = true,
    labelAlign = 'left',
    themeType = 'primary',
    themeTypeActiveHover = 'accent',
    backgroundState,
    backgroundStrength,
    hoverColor,
    outlined,
    disabled,
    textColor,
    textHover,
    useSimpleTextColor,
    ...htmlProps
  } = props;

  const unHoverActive = isActive ? 'active' : 'hover';

  return (
    <FancyFlexBox direction={calcPostionToFlex(labelAlign ?? 'left')} align="center" gap="8px" {...htmlProps}>
      {label && (
        <DisabledStyleBox disabled={disabled}>
          <Typography variant={sizeSettings[size].fontSize}>{label}</Typography>
        </DisabledStyleBox>
      )}
      <ButtonStyle
        $disabled={disabled}
        $size={size}
        $layer={layer}
        $outlined={outlined}
        $textColor={textColor}
        $textHover={textHover}
        $useSimpleTextColor={useSimpleTextColor}
        $backgroundStrength={backgroundStrength}
        $themeType={isActive ? themeTypeActiveHover : themeType}
        $hoverColor={hoverColor || isActive ? themeTypeActiveHover : themeType}
        $backgroundState={backgroundState || (isClickable ? unHoverActive : 'active')}
      >
        {icon}
      </ButtonStyle>
    </FancyFlexBox>
  );
}

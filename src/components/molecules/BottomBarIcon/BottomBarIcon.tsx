'use client';

import { FancyContent } from '@/components/molecules/FancyContent';
import { ContentWrapper } from './BottomBarIcon.style';
import { TBottomBarIconWithHTMLAttributes } from './TBottomBarIcon.model';
import { sizeSettings } from './sizeSettings';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { Typography } from '@/components/atoms/Typography';

// --------------------------------------------------------------------------- //
// -------------------- Only a Bottombar Icon with Text  --------------------- //
// --------------------------------------------------------------------------- //
export default function BottomBarIcon(props: TBottomBarIconWithHTMLAttributes) {
  const {
    sizeC = 'sm',
    icon,
    label,
    isActive,
    hoverStyle,
    disabled,
    activeThemeType,
    themeType = 'secondary',
    layer = 1,
    activeLayer = 0,
    hideLabel,
    externalStyle,
    ...htmlProps
  } = props;

  return (
    <ContentWrapper
      $disabled={disabled}
      $isActive={isActive}
      $themeType={themeType}
      $hoverStyle={hoverStyle}
      $layer={layer}
      $activeLayer={activeLayer}
      $activeThemeType={activeThemeType}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      <FancyFlexBox direction="column" align="center" gap={'xxxs'}>
        <FancySVGAtom sizeC={sizeSettings[sizeC].sizeIcon} isPassive aria-label={hideLabel ? label : undefined}>
          {icon}
        </FancySVGAtom>
        {!hideLabel && (
          <Typography variant={'subTextCaption'} lineHeight={1}>
            {label}
          </Typography>
        )}
      </FancyFlexBox>
    </ContentWrapper>
  );
}

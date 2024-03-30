import { FancyContent } from '@/components/molecules/FancyContent';
import { ContentWrapper } from './BottomBarIcon.style';
import { TBottomBarIconWithHTMLAttributes } from './TBottomBarIcon.model';
import { sizeSettings } from './sizeSettings';

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
      <FancyContent direction="column" gapBetweenIcon="">
        <FancyContent.Icon sizeC={sizeSettings[sizeC].sizeIcon} aria-label={hideLabel ? label : undefined}>
          {icon}
        </FancyContent.Icon>
        {!hideLabel && (
          <FancyContent.Description fontVariant={'subTextCaption'} lineHeight={1}>
            {label}
          </FancyContent.Description>
        )}
      </FancyContent>
    </ContentWrapper>
  );
}

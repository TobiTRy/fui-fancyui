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
    disabled,
    themeType,
    layer,
    hideLabel,
    externalStyle,
    ...htmlProps
  } = props;

  return (
    <ContentWrapper
      $disabled={disabled}
      $isActive={isActive}
      $themeType={themeType}
      $layer={layer}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      <FancyContent direction="column" gapBetweenIcon="4px">
        <FancyContent.Icon sizeC={sizeSettings[sizeC].sizeIcon} aria-label={hideLabel ? label : undefined}>
          {icon}
        </FancyContent.Icon>
        {!hideLabel && (
          <FancyContent.Description fontVariant={'subTextFootnote'} lineHeight={1}>
            {label}
          </FancyContent.Description>
        )}
      </FancyContent>
    </ContentWrapper>
  );
}

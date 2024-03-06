import { FancyContent } from '@/components/molecules/FancyContent';
import { ContentWrapper } from './BottomBarIcon.style';
import { TBottomBarIconWithHTMLAttributes } from './TBottomBarIcon.model';
import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// -------------------- Only a Bottombar Icon with Text  --------------------- //
// --------------------------------------------------------------------------- //
export default function BottomBarIcon(props: TBottomBarIconWithHTMLAttributes) {
  const { sizeC = 'md', icon, label, isActive, disabled, themeType, layer, hideLabel, ...htmlProps } = props;

  return (
    <ContentWrapper
      $disabled={disabled}
      $isActive={isActive}
      $themeType={themeType}
      $layer={layer}
      $sizeC={sizeC}
      {...htmlProps}
    >
      <FancyContent direction="column" gapBetweenIcon="0">
        <FancyContent.Icon sizeC={sizeSettings[sizeC].sizeIcon} aria-label={hideLabel ? label : undefined}>
          {icon}
        </FancyContent.Icon>
        {!hideLabel && <FancyContent.Description fontVariant={'subTextFootnote'}>{label}</FancyContent.Description>}
      </FancyContent>
    </ContentWrapper>
  );
}

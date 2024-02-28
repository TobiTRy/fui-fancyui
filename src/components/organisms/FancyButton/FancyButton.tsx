import { css } from 'styled-components';

import { LoadingSVGArrows } from '@/components/atoms/LoadingSVGArrows';
import { Button } from '@/components/molecules/Button';
import { FancyContent } from '@/components/molecules/FancyContent';
import { generateFancyButton } from './FancyButton.style';

import { TButtonWithNativeAttrs, TButton } from '@/components/molecules/Button/Button.model';
import { TFancyButtonProps } from '@/components/organisms/FancyButton/TFancyButton.model';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';
import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ---------- The Fancy Button has a bit more options than another  ---------- //
// --------------------------------------------------------------------------- //
type TFancyButton = TFancyButtonProps & TButtonWithNativeAttrs;
export default function FancyButton(props: TFancyButton) {
  const {
    icon,
    label,
    isLoading,
    iconAlign,
    sizeC = 'md',
    align = 'center',
    externalStyle,
    oneToOne,
    gap,
    ...buttonProps
  } = props;

  const generateFancyStyle = generateFancyButton({
    $sizeC: sizeC,
    $oneToOne: oneToOne ?? (Boolean(!label) && Boolean(icon)),
    $justifyContent: leftRightCenterToFlexJustify[align ?? 'center'],
  });

  // handle icon alignment
  const alignIcon = iconAlign === 'left' ? 'row' : 'row-reverse';

  return (
    <Button
      sizeC={sizeC}
      externalStyle={css`
        ${generateFancyStyle};
        ${externalStyle};
      `}
      {...(buttonProps as TButton)}
    >
      <FancyContent direction={alignIcon} gapBetweenIcon={gap}>
        {label && (
          <FancyContent.Title fontVariant={sizeSettings[sizeC ?? 'md'].fontSize} themeType={buttonProps.textColor}>
            {label}
          </FancyContent.Title>
        )}
        {(isLoading || icon) && (
          <FancyContent.Icon>
            {isLoading ? <LoadingSVGArrows isLoading={isLoading} sizeC={sizeC} /> : icon}
          </FancyContent.Icon>
        )}
      </FancyContent>
    </Button>
  );
}
